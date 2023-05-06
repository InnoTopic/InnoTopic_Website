import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  Topics,
  topics,
} from '../../TopicFriendsShared3/topics-core/topics-data';
import { errorAlert } from '../../utils/utils';


// idea: new/expanding-to topics could be with effect e.g. static noise or fading in-out, e.g. qwik, turbopack; while old, permanently faded

declare const d3: any;
declare const $: any;

export type GraphNodeId = string
export type TopicId = string /*FIXME move*/

// export type GraphConnections = { [key: TopicId]: GraphNode }
export type GraphConnections = { [key in keyof Partial<Topics>]: GraphNode }

export interface GraphNode {
  connections?: GraphConnections
  sizeMult?: number
}

export interface LinkByIds {
  source: GraphNodeId
  target: GraphNodeId
}

const preset1 = {
  // forceLinkStrength: 3,
  forceLinkStrength: 0.1,
  // forceManyBodyStrength: -1000,
  forceManyBodyStrength: -50,
}

const preset = {
  // forceLinkStrength: 3,
  forceLinkStrength: 1,
  // forceManyBodyStrength: -1000,
  forceManyBodyStrength: -200,
}

// TODO: try d3.forceRadial(radius[, x][, y])

const veryBigSize = 2, bigSize = 1.76, midSize = 1.25, smallSize = 0.7, verySmallSize = 0.35;


@Component({
  selector: 'app-topics-graph',
  templateUrl: './topics-graph.component.html',
  styleUrls: ['./topics-graph.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class TopicsGraphComponent implements OnInit {

  @Input()
  nodes = {
    /* only nodes that I want to apply special properties */
    jQuery: { /*size: small*/},
    Angular: { /*size: big*/},
  }

  @Input()
  connections: GraphConnections = {
    HTML5: {
      sizeMult: bigSize,
      connections: {
        JavaScript: {
          sizeMult: bigSize,
          connections: {
            'TypeScript': { /*type: 'writtenIn'*/ /* dependsOn / uses */
              sizeMult: veryBigSize,
            },
            Ionic: {
              sizeMult: veryBigSize,
              connections: {
                'Angular': {
                  sizeMult: veryBigSize,
                  connections: {
                    NgRx: {},
                  }
                },
                'Vue.js': {sizeMult: bigSize},
                'React': { /*...weak*/ sizeMult: veryBigSize},
                Android: {
                  sizeMult: midSize,
                  connections: {
                    Java: {
                      sizeMult: smallSize,
                      connections: {
                        "Spring Boot": {
                          sizeMult: verySmallSize,
                          /* TODO could display old stuff as faded/transparent/grayed */
                          // ...small
                        }
                      }
                    },
                    Kotlin: {},
                  },
                },
                'Stencil': {
                  connections: {
                    'Web Components': {},
                  }
                }
              },
            },
            Svelte: {sizeMult: midSize},
            Qwik: {sizeMult: smallSize},
            // Astro: {},
            SolidJS: {
              sizeMult: smallSize,
            },
            'Node.js': {},
            Deno: {
              connections: {
                Rust: {
                  connections: {
                    // Turbopack: {},
                    // Turborepo: {},
                  }
                },
              }
            },
            Jest: {},
            Redux: {},
            RxJS: {},
            Vite: {},
            // Turbopack: {
            //   connections: {
            //     Turborepo: {},
            //   },
            // },
            // TODO: "JS build & deploy node" - icon with a box and up-arrow (a'la upload): vercel, esbuild turbopack, netlify, vite
            // "JavaScript Libraries": {},
            // Astro: {},
            // TurboPack,
            Vercel: {},
            Netlify: {},
          },
        },
        CSS3: {
          sizeMult: bigSize,
          connections: {
            Sass: {},
            Stylus: { sizeMult: smallSize},
            Less: { sizeMult: smallSize},
          }
        },
        SVG: {
          connections: {
            "Affinity Designer": { sizeMult: smallSize},
            Figma: {},
            'D3.js': {},
          }
        },
      },
    },
  }

  public d3Nodes: any[] = []
  private d3Links: LinkByIds[] = []

  constructor() { }

  ngOnInit() {
    console.log('generateNodes', this.d3Nodes)
    this.generateNodes(this.connections)
    console.log('d3Nodes', this.d3Nodes)
    this.generateLinks(this.connections)
    this.fetchIcons() // this inits graph when finished
  }

  private async fetchIcons() {
    // const topicNodes = [topics.Svelte, topics['Vue.js'], topics.React]
    const topicNodes = this.d3Nodes.map(d3Node => {
      let topicId = d3Node.id;
      const topic = (topics as any)[topicId]
      if ( ! topic ) {
        console.error('No topic for graph node id:', topicId)
      }
      return topic
    })

    let logosPromises = topicNodes.map((topic: any) => {
      console.log(`topic`, topic)
      const responsePromise = fetch(topic.logo);
      // responsePromise.then(resp => {
      //   resp.text().then(text => {
      //     const d3Node = this.d3Nodes.find(n => n.id === topic.name /* not id coz _dot_js */);
      //     if ( ! d3Node ) {
      //       console.error('no node', topic.id)
      //     }
      //     d3Node.body = text.trim().substr(text.indexOf('<svg')) // TODO maybe remove other attrs like width height
      //     // TODO: prolly i really wanna remove stuff AFTER <svg
      //     console.log('d3Node with text', d3Node)
      //   })
      // })
      return responsePromise/*.then(x => {
        console.log('topic svg fetched', x.text())
      })*/
      // return (await responsePromise).text()
    });
    console.log(`topic logosPromises`, logosPromises)
    const topicLogosResponses = await Promise.all(logosPromises)

    const topicLogosTexts = await Promise.all(topicLogosResponses.map(resp => resp.text())).then(texts => {
      texts.forEach((text, i) => {
        const topic = topicNodes[i]
        const id = topic.name
        const d3Node = this.d3Nodes.find(n => n.id === topic.name /* not id coz _dot_js */);
        if ( ! d3Node ) {
          console.error('no node', topic.id)
        }
        d3Node.body = text.trim().substr(text.indexOf('<svg')) // TODO maybe remove other attrs like width height
        // TODO: prolly i really wanna remove stuff AFTER <svg
        console.log('d3Node with text', d3Node)

      })
      this.initD3Graph() // FIXME
    })
    // const topicLogosTexts = await Promise.all(topicLogosResponses)

    console.log(`topic logos`, topicLogosResponses)
    console.log(`topic logos topicLogosTexts`, topicLogosTexts)

    // setTimeout(() => {
    //   this.initD3Graph() // FIXME
    // }, 3000)

    // fetch('../../../assets/images/logos-l/logos/stencil.svg').then(x => {
    //   console.log('svg fetched', x.text())
    // })

  }


  private initD3Graph() {
    const svgRootElement = d3.select("#topics-graph-d3"),
      width = +svgRootElement.attr("width"),
      height = +svgRootElement.attr("height");

    const svg = svgRootElement.append("g"); /* actually a <g>, to fix transform not working in <svg> on chrome:
        http://stackoverflow.com/questions/27283610/d3-workaround-for-svg-transform-in-chrome */

    // svgRootElement.call(d3.zoom().on("zoom", function () {
    //   svg.attr("transform", d3.event.transform)
    // }));

    // var color = d3.scaleOrdinal(d3.schemeCategory20);
    // const color = d3.rgb(230, 230, 230, 128);
    console.log(`d3`, d3)
    // const color = d3.rgb(80, 80, 80)// .copy({opacity: 0.5});
    const color = d3.color(`rgba(80, 80, 80, 0.5)`) // .copy({opacity: 0.5});

    /* Base Example:
       Force-Directed Graph: https://bl.ocks.org/mbostock/4062045 */
    const simulation = d3.forceSimulation()
      // .force("gravity", 3)
      .force("link",
        d3.forceLink().id(function(d: any) { return d.id; })
          .strength(function(d: any) {
            return preset.forceLinkStrength;
//                      return 1 / Math.min(count(link.source), count(link.target));
//                      return (typeof d.strengthMul === "undefined") ? 3 : d.strengthMul
          }))
      .force("charge", d3.forceManyBody().strength(function(d: GraphNode) {
        const size = d.sizeMult ?? midSize;
        // return preset.forceManyBodyStrength
        // return size**5 * preset.forceManyBodyStrength / 3
        return size**10 * preset.forceManyBodyStrength / 100
      }))
      .force("center", d3.forceCenter(width / 2, height / 2));

// simulation.force("charge", function() {
////        return (d.sizeMult ? d.sizeMult : 1) * 100 }
//            return -1000000;
//        })




    const CSS = "CSS"; // FIXME remove
    const nodes = {
      // AffinityDesigner: {id: AffinityDesigner, html: "Affinity<br/>Designer"},
      // Java: {
      //   "id": Java,
      //   sizeMult: bigSize,
      //   body: "viewBox=\"0 0 256 346\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n" +
      //     "\t<g>\n" +
      //     "\t\t<path d=\"M82.5539491,267.472524 C82.5539491,267.472524 69.35552,275.147869 91.9468218,277.745105 C119.315549,280.867375 133.303389,280.419607 163.463913,274.711273 C163.463913,274.711273 171.393396,279.683258 182.467491,283.989644 C114.855564,312.966982 29.4483782,282.311215 82.5539491,267.472524\" fill=\"#5382A1\"></path>\n" +
      //     "\t\t<path d=\"M74.2921309,229.658996 C74.2921309,229.658996 59.4888145,240.616727 82.0968727,242.955171 C111.333004,245.971316 134.421411,246.218007 174.373236,238.524975 C174.373236,238.524975 179.899113,244.127185 188.588218,247.190807 C106.841367,271.094691 15.79008,249.075898 74.2921309,229.658996\" fill=\"#5382A1\"></path>\n" +
      //     "\t\t<path d=\"M143.941818,165.514705 C160.601367,184.695156 139.564684,201.955142 139.564684,201.955142 C139.564684,201.955142 181.866124,180.117876 162.438982,152.772422 C144.294633,127.271098 130.380335,114.600495 205.706705,70.9138618 C205.706705,70.9138618 87.4691491,100.44416 143.941818,165.514705\" fill=\"#E76F00\"></path>\n" +
      //     "\t\t<path d=\"M233.364015,295.441687 C233.364015,295.441687 243.131113,303.489396 222.60736,309.715316 C183.580858,321.537862 60.1748945,325.107898 25.8932364,310.186356 C13.5698618,304.825251 36.67968,297.385425 43.9491491,295.824291 C51.5304727,294.180305 55.8629236,294.486575 55.8629236,294.486575 C42.15808,284.832116 -32.7195927,313.443607 17.8287709,321.637469 C155.681513,343.993251 269.121164,311.570618 233.364015,295.441687\" fill=\"#5382A1\"></path>\n" +
      //     "\t\t<path d=\"M88.9008873,190.479825 C88.9008873,190.479825 26.1287564,205.389265 66.6717091,210.803433 C83.7901964,213.095331 117.915462,212.576815 149.702284,209.913484 C175.680233,207.722124 201.765236,203.062924 201.765236,203.062924 C201.765236,203.062924 192.605091,206.985775 185.977949,211.510924 C122.233949,228.275665 -0.907636364,220.476509 34.5432436,203.328233 C64.5241018,188.83584 88.9008873,190.479825 88.9008873,190.479825\" fill=\"#5382A1\"></path>\n" +
      //     "\t\t<path d=\"M201.506444,253.422313 C266.305164,219.7504 236.344785,187.392 215.432844,191.751447 C210.307258,192.818269 208.021876,193.742662 208.021876,193.742662 C208.021876,193.742662 209.924655,190.761891 213.558924,189.471651 C254.929455,174.927127 286.746065,232.368873 200.204102,255.11936 C200.204102,255.120291 201.206691,254.223825 201.506444,253.422313\" fill=\"#5382A1\"></path>\n" +
      //     "\t\t<path d=\"M162.438982,0.371432727 C162.438982,0.371432727 198.325527,36.27008 128.402153,91.4720582 C72.3307055,135.753542 115.616116,161.001658 128.37888,189.848669 C95.6490473,160.318371 71.6297309,134.322735 87.7437673,110.128407 C111.395375,74.6132945 176.918342,57.3942691 162.438982,0.371432727\" fill=\"#E76F00\"></path>\n" +
      //     "\t\t<path d=\"M95.2683055,344.665367 C157.466996,348.646865 252.980131,342.45632 255.24224,313.025629 C255.24224,313.025629 250.893964,324.182575 203.838371,333.042967 C150.750487,343.033484 85.2740655,341.867055 46.4393309,335.464262 C46.4402618,335.463331 54.3892945,342.043927 95.2683055,344.665367\" fill=\"#5382A1\"></path>\n" +
      //     "\t</g>\n" +
      //     "</svg>\n"
      // },
    };

    // const links = [
    //   {source: Java, target: "Scala"},
    //   {source: Java, target: Android},
    //   {source: Java, target: Kotlin, distance: 1.3},
    //   {source: Java, target: "Groovy"},
    //   {source: Ruby, target: "Groovy", thick: 0},
    // ];

    // const nodesWebOnly = [
    //   nodes.Cordova,
    //   nodes.HTML5,
    // ];
    /* ToDo: Bower, Grunt, JSLint */

    // const linksWebOnly = [
    //   {source: HTML5, target: CSS, thick: 10},
    //   {source: SVG, target: HTML5, thick: 10, distance: 1.5},
    // ];

    const nodesKeys = Object.keys(nodes);

    const nodesArray = nodesKeys.map(function(v) { return (nodes as any)[v]; });

    // initial xy: https://observablehq.com/@d3/force-layout-phyllotaxis


    const graph = {
      nodes: this.d3Nodes,
      links: this.d3Links
    };


    const allLinksGroup = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function(d: any) {
        return 10; // Math.sqrt(d.thick == null ? 10 : d.thick );
      });

    const allNodesGroup = svg.append("g") /* Group that contains all nodes */
      .attr("class", "nodes")
      .selectAll(".node")
      .data(graph.nodes)
      .enter();

    const perNodeMainGroup = allNodesGroup.append("g") /* top-level group of a node which will include the circle and icon */
      .attr("class", "node");

    allNodesGroup.selectAll(".techCircleOverlay")
      .data(graph.nodes)

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(graph.links)
      .distance(function(link: any) {
        //        return link.graph === 0 ? height/2 : height/4;
        const multip = link.distance == null ? 0.7 : link.distance;
        return multip * 70;
      });

    const defaultRadius = 23;
    let isDragging = false;

    const radiusFunc = function(d: any) {
      return d.sizeMult ? d.sizeMult * defaultRadius : defaultRadius
    };

    const radiusFuncRect = function(d: any) {
      return radiusFunc(d) * 2;
    }
    const nodeCircle = perNodeMainGroup.append("circle")
      .attr("class", function(d: any) { d.id + '_background' + ' circleBg' + ' techCircle'} )
      .attr("r", radiusFunc )
      .attr("id2", function(d: any) { return d.id } )
      .attr("id", function(d: any) { return d.id } )

      .attr("fill", function(d: any) { return color; })
//                .attr("title", "TEST")
    ;


    const foreignObjectW = 100; // foreign object width
    const foreignObjectH = 50;
    const defaultSize = 30;

    perNodeMainGroup.append("g").html(function(d: any) {
      const bodyText = d.body || "";
      const size = d.sizeMult ? d.sizeMult * defaultSize
        : defaultSize;

      if (bodyText.trim().endsWith("</svg>")) {
        const htmlContent = '<svg '
          + 'width=\"'  + size + 'px\" '
          + 'height=\"' + size + 'px\" '
          + 'x="' + (-size / 2) + '" '
          + 'y="' + (-size / 2) + '" '
          + bodyText /* also contains </svg> */;
        return htmlContent;
      } else {
        return "";
      }
    });


    const border = 0;

    perNodeMainGroup.append("foreignObject")
      .attr("style", "pointer-events:none;")
      .attr("width", foreignObjectW)
      .attr("height", foreignObjectH)
      .attr("height", foreignObjectH)
      .attr("x", -foreignObjectW / 2)
      .attr("y", -foreignObjectH / 2)
      .style("font", "9px 'Helvetica Neue'")
      .html(function(d: any) {
        if ( d.body ) {
          return ""; // has icon: no need for text
        }
        const bodyText = d.html || d.id;
        return "<div style='display: table;" +
          "text-align:center;" +
          "height:100%; width:100%'>" +
          "<p style='display: table-cell; " +
          "vertical-align: middle'>" +
          bodyText + "</p></div>";
      });

    function unHighlightHover(d?: any) {
      $('.techCircleHover').removeClass("techCircleHover", false);
      d3.select(".techCircleHover").classed("techCircleHover", false);
    }

    /* need to set the overlay's position separately in root,
       because of jerky movement issue with drag&drop and "translate(...)" transform
    */
    const nodeCircleOverlay = allNodesGroup
      .append("rect")
      //        .attr("r", radiusFunc)
      .attr("width", radiusFuncRect)
      .attr("height", radiusFuncRect)
      .attr("rx", radiusFunc)
      .attr("ry", radiusFunc)
      //        .attr("x", 0)
      //        .attr("x", -defaultRadius)
      //        .attr("y", 0)
      //        .attr("y", -defaultRadius)
      .classed("techCircleOverlay", true);

    nodeCircleOverlay.on("mouseover", function(this: any, d: any) {
      if ( ! isDragging ) {
//            $('tech').hover(function() {
        $('#' + d.id).addClass("techCircleHover");
//            $("[id2='"+ d.id + "']").css('background-color','rgba(0, 0, 0, 0.6)');
        $("." + d.id + '_background').css('background-color', 'rgba(0, 0, 0, 0.6)');
        d3.select(this).classed("techCircleHover", true); // "#fff8ee00"
      }
    })
      .on("mouseout", function(this: any, d: any) {
        if ( ! isDragging ) { /* While dragging, the highlight shall stay */
          unHighlightHover.call(this, d);
        }
      });

    nodeCircleOverlay.call(
      d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded));

    const titleFunc = function(d: any) { return d.id; };
    nodeCircle.append("title")
      .text(titleFunc);
    nodeCircleOverlay.append("title")
      .text(titleFunc);


    function ticked() {
      allLinksGroup
        .attr("x1", function(d: any) { return d.source.x; })
        .attr("y1", function(d: any) { return d.source.y; })
        .attr("x2", function(d: any) { return d.target.x; })
        .attr("y2", function(d: any) { return d.target.y; });

      perNodeMainGroup
        .attr("x", function(d: any) { return (d.x - radiusFunc(d) ); })
        .attr("y", function(d: any) { return (d.y - radiusFunc(d) ); });
      nodeCircleOverlay /* need to set position separately, because of issue with drag&drop and "translate(...)" transform */
        .attr("x", function(d: any) { return (d.fx || d.x) - radiusFunc(d); })
        .attr("y", function(d: any) { return (d.fy || d.y) - radiusFunc(d); });
      perNodeMainGroup.attr("transform", function(d: any) {
        // return "translate(" + (d.x + radiusFunc(d) / 2) + "," + (d.y + radiusFunc(d) / 2) + ")";
        return "translate(" + (d.x) + "," + (d.y) + ")";
      });
    }

    function dragStarted(d: any) {
      isDragging = true;
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d: any) {
      isDragging = true; // just in case...
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragEnded(d: any) {
      isDragging = false;
      unHighlightHover()

      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }

  }

  private generateNodes(connections: GraphConnections) {
    // const nodesSet = new Set(GraphNodeId)
    const nodes = []
    nodes.push(... Object.keys(connections).map(key => {
      const child = (connections as any)[key]
      const childConnections = child.connections
      if ( childConnections ) {
        this.generateNodes(childConnections)
      }

      // return {id: key, html: key}
      return {
        id: key,
        ... child /* TODO keep in mind that I might be mixing connection and note attrs here; so maybe smth like: 'connection: xyz' */,
      }

      // return {
      //   "id": key,
      //     // sizeMult: bigSize,
      //     body: "viewBox=\"0 0 256 346\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n" +
      //   "\t<g>\n" +
      //   "\t\t<path d=\"M82.5539491,267.472524 C82.5539491,267.472524 69.35552,275.147869 91.9468218,277.745105 C119.315549,280.867375 133.303389,280.419607 163.463913,274.711273 C163.463913,274.711273 171.393396,279.683258 182.467491,283.989644 C114.855564,312.966982 29.4483782,282.311215 82.5539491,267.472524\" fill=\"#5382A1\"></path>\n" +
      //   "\t\t<path d=\"M74.2921309,229.658996 C74.2921309,229.658996 59.4888145,240.616727 82.0968727,242.955171 C111.333004,245.971316 134.421411,246.218007 174.373236,238.524975 C174.373236,238.524975 179.899113,244.127185 188.588218,247.190807 C106.841367,271.094691 15.79008,249.075898 74.2921309,229.658996\" fill=\"#5382A1\"></path>\n" +
      //   "\t\t<path d=\"M143.941818,165.514705 C160.601367,184.695156 139.564684,201.955142 139.564684,201.955142 C139.564684,201.955142 181.866124,180.117876 162.438982,152.772422 C144.294633,127.271098 130.380335,114.600495 205.706705,70.9138618 C205.706705,70.9138618 87.4691491,100.44416 143.941818,165.514705\" fill=\"#E76F00\"></path>\n" +
      //   "\t\t<path d=\"M233.364015,295.441687 C233.364015,295.441687 243.131113,303.489396 222.60736,309.715316 C183.580858,321.537862 60.1748945,325.107898 25.8932364,310.186356 C13.5698618,304.825251 36.67968,297.385425 43.9491491,295.824291 C51.5304727,294.180305 55.8629236,294.486575 55.8629236,294.486575 C42.15808,284.832116 -32.7195927,313.443607 17.8287709,321.637469 C155.681513,343.993251 269.121164,311.570618 233.364015,295.441687\" fill=\"#5382A1\"></path>\n" +
      //   "\t\t<path d=\"M88.9008873,190.479825 C88.9008873,190.479825 26.1287564,205.389265 66.6717091,210.803433 C83.7901964,213.095331 117.915462,212.576815 149.702284,209.913484 C175.680233,207.722124 201.765236,203.062924 201.765236,203.062924 C201.765236,203.062924 192.605091,206.985775 185.977949,211.510924 C122.233949,228.275665 -0.907636364,220.476509 34.5432436,203.328233 C64.5241018,188.83584 88.9008873,190.479825 88.9008873,190.479825\" fill=\"#5382A1\"></path>\n" +
      //   "\t\t<path d=\"M201.506444,253.422313 C266.305164,219.7504 236.344785,187.392 215.432844,191.751447 C210.307258,192.818269 208.021876,193.742662 208.021876,193.742662 C208.021876,193.742662 209.924655,190.761891 213.558924,189.471651 C254.929455,174.927127 286.746065,232.368873 200.204102,255.11936 C200.204102,255.120291 201.206691,254.223825 201.506444,253.422313\" fill=\"#5382A1\"></path>\n" +
      //   "\t\t<path d=\"M162.438982,0.371432727 C162.438982,0.371432727 198.325527,36.27008 128.402153,91.4720582 C72.3307055,135.753542 115.616116,161.001658 128.37888,189.848669 C95.6490473,160.318371 71.6297309,134.322735 87.7437673,110.128407 C111.395375,74.6132945 176.918342,57.3942691 162.438982,0.371432727\" fill=\"#E76F00\"></path>\n" +
      //   "\t\t<path d=\"M95.2683055,344.665367 C157.466996,348.646865 252.980131,342.45632 255.24224,313.025629 C255.24224,313.025629 250.893964,324.182575 203.838371,333.042967 C150.750487,343.033484 85.2740655,341.867055 46.4393309,335.464262 C46.4402618,335.463331 54.3892945,342.043927 95.2683055,344.665367\" fill=\"#5382A1\"></path>\n" +
      //   "\t</g>\n" +
      //   "</svg>\n"
      // }
    }))
    this.d3Nodes.push(...nodes)
  }

  private generateLinks(connections: GraphConnections) {
    Object.keys(connections).map(sourceId => {
      const child = (connections as any)[sourceId]
      const childConnections = child.connections
      if ( childConnections ) {
        this.generateLinks(childConnections)
      }

      // const nestedConnections = child.connections
      const nestedConnections = (connections as any)[sourceId].connections || {}
      const links: LinkByIds[] = Object.keys(nestedConnections).map(
        key => {
          const d3Link: LinkByIds = {
            source: sourceId as GraphNodeId,
            target: key as GraphNodeId
          }
          return d3Link
        }
      );
      this.d3Links.push(
        ...links
      )
    })
    console.log(`links`, this.d3Links)
  }
}
