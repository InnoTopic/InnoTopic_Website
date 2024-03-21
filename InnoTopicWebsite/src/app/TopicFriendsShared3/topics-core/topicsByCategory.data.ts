// maybe just do the AI stuff like this, coz too much to change in the other file

export const topicsByCategory = {
  subCategories: {
    'AI': {
      subCategories: {
        'AI Platforms': {
          topics: {

          },
          // openai, anthropic, google bard, etc.
        },
        'Vector Databases': {
          aliases: 'Embeddings databases',
          topics: {

          }
        }
      }
    }
  }
}

export type AllTopics =
  typeof topicsByCategory.subCategories.AI.subCategories["AI Platforms"]['topics'] //.subCategories["AI Platforms"].topics |
  // typeof topicsByCategory.AI.subCategories['AI Platforms'].topics
