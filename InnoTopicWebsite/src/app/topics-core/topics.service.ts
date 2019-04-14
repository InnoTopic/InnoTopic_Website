import { Injectable } from '@angular/core';
import {
  Topic,
} from './topic';
import {
  tag,
} from './topics';
import { topicsArr } from './topics-data';
import { topicsOld } from './topics-data-old';


@Injectable()
export class TopicsService {


  public topics: Topic[] = this.transformTags(topicsOld);

  constructor(

  ) {
    console.log('topicsArr', topicsArr)
    this.topics.push(... topicsArr)
    // console.log('all topics', this.topics)
  }



  private transformTags(inputList: (Topic|string)[]): Topic[] {
    let retTopicsArray = []
    for ( let elTopic of inputList ) {
      // console.log('transformTags elTopic', elTopic)
      this.addTopic(elTopic, retTopicsArray)
    }
    return retTopicsArray
  }

  getTopicById(topicIdOrName: string, topicsArray?: Topic[]): Topic {
    const topic = this.getTopicByIdIfExisting(/*...arguments*/ topicIdOrName, topicsArray)
    if ( ! topic ) {
      console.log('getTopicById', this.topics)
      throw new Error('getTopicById failed for topicIdOrName ' + topicIdOrName)
      // console.log(topicsArray)
    }
    return topic
  }

  getTopicByIdIfExisting(topicIdOrName: string, topicsArray?: Topic[]): Topic {
    console.log('getTopicByIdIfExisting topicIdOrName', topicIdOrName)
    // TODO: change to hash-map, while doing topic management
    topicsArray = topicsArray || this.topics
    let retVal = topicsArray.find((it: Topic) => it.id.toLowerCase() === topicIdOrName.toLowerCase())
    if ( ! retVal ) {
      retVal = topicsArray.find((it: Topic) => it.name.toLowerCase() === topicIdOrName.toLowerCase())
    }
    // console.log('getTopicById', topicId, retVal)
    return retVal
  }

  addTopic(topic: Topic|string, topicsArray?: Topic[]) {
    topicsArray = topicsArray || this.topics


    let newTopic: Topic

    if (topic instanceof Topic) {
      newTopic = topic
    } else {
      newTopic = tag(topic)
    }


    if ( this.topicExistsById(newTopic.id, topicsArray) ) {
      const message2 = 'Duplicate topic: '
      console.error('Duplicate topic: ', newTopic)
      window.alert('Duplicate topic: ' + newTopic.id)
      return null
    }

    topicsArray.push(newTopic)
    if ( newTopic.related ) {
      for ( let relatedTopic of newTopic.related ) {
        this.addTopic(relatedTopic, topicsArray)
      }
      // topicsArray.splice(topicsArray.length, 0, ...newTopic.related)
    }

    return newTopic
  }

  topicExistsById(topicId: string, topicsArray?) {
    return !! this.getTopicByIdIfExisting(topicId, topicsArray)
  }

}
