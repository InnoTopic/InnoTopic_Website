import { Topics } from "src/app/TopicFriendsShared3/topics-core/topics-data";
 
 
export type GraphNodeId = string;
export type TopicId = string; // FIXME move

export type GraphConnections = { [key in keyof Partial<Topics>]: GraphNode };

export interface GraphNode {
  connections?: GraphConnections;
  sizeMult?: number;
  strengthMul?: number;
}

export interface LinkByIds {
  source: GraphNodeId;
  target: GraphNodeId;
  strengthMul?: number;
}

export const size = {
  verySmall: 0.25,
  small: 0.3,
  mid: 0.95,
  big: 1.26,
  veryBig: 2,
};
export const
  veryBigSize = size.veryBig,
  bigSize = size.big,
  midSize = size.mid,
  smallSize = size.small,
  verySmallSize = size.small;

export const nodes = {    
  jQuery: { /*size: small*/ },
  Angular: { /*size: big*/ },
};
 

export const connections: GraphConnections = {
  CSS3: {
    sizeMult: size.big,
    connections: {
      Sass: {},
      Stylus: { sizeMult: size.small },
      Less: { sizeMult: size.small },
    }
  },
  JavaScript: {
    sizeMult: size.big,
    connections: {
      'TypeScript': { /*type: 'writtenIn'*/ /* dependsOn / uses */
        sizeMult: size.veryBig,
        strengthMul: 0.4,
      },
      'Frontend': { /*type: 'writtenIn'*/ /* dependsOn / uses */
      strengthMul: 1.5,
      sizeMult: veryBigSize,
      // strengthMul: 0.4,
      connections: {
        Backend: {
          sizeMult: size.veryBig,
          strengthMul: 1.5,
          connections: {
            Cloud: {
              connections: {
                AWS: {},
                "GCP - Google Cloud Platform": {},
                "Microsoft Azure": {},
                // "Cloud Firestore": {},

              },
            },

            Databases: {
              connections: {
                "Cloud Firestore": {},
                "PostgreSQL": {},
                "MongoDB": {
                  sizeMult: size.veryBig,
                },
                "Supabase": {},
                "MariaDB": {},
                "SurrealDB": {},
              }
            },
            Python: {
              sizeMult: size.veryBig,
              connections: {
                Django: {
                  sizeMult: size.veryBig,

                },
                Flask: {
                  sizeMult: size.mid
                },
              }
            }
          }
        },
        Svelte: {sizeMult: midSize},
        Qwik: {sizeMult: smallSize},
        // Astro: {},
        SolidJS: {
          sizeMult: smallSize,
        },
        Ionic: {
          strengthMul: 2,
          sizeMult: veryBigSize,
          connections: {

            'Angular': {
              strengthMul: 0.7,
              sizeMult: veryBigSize,
              connections: {
                NgRx: {
                  strengthMul: 2,
                },
              }
            },
            'Vue.js': {
              strengthMul: 0.5,
              sizeMult: bigSize
            },
            'React': { /*...weak*/
              strengthMul: 0.5,
              sizeMult: veryBigSize
            },
            Android: {
              strengthMul: 1.5,
              sizeMult: midSize,
              connections: {
                Java: {
                  strengthMul: 3,
                  sizeMult: smallSize,
                  connections: {
                    "Spring Boot": {
                      strengthMul: 2,
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
              strengthMul: 2,
              connections: {
                'Web Components': {},
              }
            }
          },
        }
      }
    },
    'Node.js': {},
    Deno: {
      connections: {
        Rust: {
          sizeMult: size.veryBig,
          connections: {
            WebAssembly: {

            },
            Tokio: {},
            Tonic: {
              sizeMult: smallSize,
            },
            Tauri: {},
            Dioxus: {},
            Yew: {},
            // SurrealDB: {},
            Turbopack: {},
            Turborepo: {},
          },
          strengthMul: 2,
        },
      }
    },
    Jest: {},
    Redux: {},
    RxJS: {},
    Vite: {
      strengthMul: 0.5,
    },
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
    Netlify: {},    },
  },
  HTML5: {
    sizeMult: bigSize,
    connections: {
      SVG: {
        sizeMult: bigSize,
        strengthMul: 2,
        connections: {
          "Affinity Designer": { sizeMult: smallSize},
          Figma: {},
          'D3.js': {},
        }
      },
    },
  },
  // Rest of your nodes data...
  // This includes all the other nodes in your original `connections` object.
};


 
export const preset1 = {
  // forceLinkStrength: 3,
  forceLinkStrength: 0.1,
  // forceManyBodyStrength: -1000,
  forceManyBodyStrength: -50,
}

export const preset = {
  // forceLinkStrength: 3,
  forceLinkStrength: 1,
  // forceManyBodyStrength: -1000,
  forceManyBodyStrength: -200, 
  allowZoom: true,
  // allowZoom: false,
}