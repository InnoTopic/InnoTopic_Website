import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { topics } from '../../TopicFriendsShared/topics-core/topics-data';

@Component({
  selector: 'app-topics-graph',
  templateUrl: './topics-graph.component.html',
  styleUrls: ['./topics-graph.component.sass']
})
export class TopicsGraphComponent implements OnInit {

  @Input()
  nodes = {
    /* only nodes that I want to apply special properties */
    jQuery: { /*size: small*/},
    Angular: { /*size: big*/},
  }

  @Input()
  connections = {
    css: {
      sass: {},
    },
    ionic: {
      'Angular': {},
      'TypeScript': { type: 'writtenIn' /* dependsOn / uses */},
      'Vue': {},
      'React': { /*...weak*/},
    }
  }

  constructor() { }

  ngOnInit() {
    this.fetchIcons()
  }

  private async fetchIcons() {
    const topicNodes = [topics.Svelte, topics['Vue.js'], topics.React]

    let logosPromises = topicNodes.map(topic => {
      console.log(`topic`, topic)
      let responsePromise = fetch(topic.logo);
      return responsePromise/*.then(x => {
        console.log('topic svg fetched', x.text())
      })*/
      // return (await responsePromise).text()
    });
    console.log(`topic logosPromises`, logosPromises)
    const topicLogosResponses = await Promise.all(logosPromises)

    const topicLogosTexts = await Promise.all(topicLogosResponses.map(resp => resp.text()))

    console.log(`topic logos`, topicLogosResponses)
    console.log(`topic logos topicLogosTexts`, topicLogosTexts)


    // fetch('../../../assets/images/logos-l/logos/stencil.svg').then(x => {
    //   console.log('svg fetched', x.text())
    // })

  }


}
