import {topics} from "../../skills/work-experience-highlights-data";

const tRefs = topics
// rename topics() to tRefs coz topics.data also has topics() function

export const shirtData = {


  mergeRow: {
    ai: {
      "Local AI-s": {} // Ollama, GPT4All, LocalAI
    },
    // aiPlatforms: tRefs([
    //   'Anthropic', 'Google Bard',
    // ]),
    // ai: [] // Grab entire vector databases (embedding databases),
    // aiPoweredTools: tRefs({
    //   'Warp',
    // }),
    aiPoweredCoding: {
      // TODO: MetaMage icon prototype
      // could take all from this category in topics.data
    },
    // aiCoding, ai software development in general (including design, choosing tools, etc.)
    frontendMain: tRefs({

    }),
    frontendOther: tRefs({
      // smaller icons
    }),
    comprehension: tRefs({

    })
  }
}
