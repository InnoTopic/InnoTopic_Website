import { Injectable } from '@angular/core';
import { errorAlert } from '../../utils/utils';
import {
  Topic,
} from './Topic';
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
    // console.log('topicsArr', topicsArr)
    topicsArr.forEach(t => {
      if ( this.getTopicByIdIfExisting(t.id) ) {
        let errorPrefix = 'TOPIC DUPLICATE WITH OLD topics (old one might be overriding data) : ';
        console.log(errorPrefix, t.id)
        window.alert(errorPrefix + ' ' +  t.id)
      }
    })
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
      // FIXME: handle unknown topics (no icon, add some suffix like "(Unknown)", warn on console; for TopicFriends, if older version displays data from newer version
      // console.log('getTopicById', this.topics)
      errorAlert('getTopicById failed for topicIdOrName ' + topicIdOrName)
      // console.log(topicsArray)
    }
    return topic
  }

  getTopicByIdIfExisting(topicIdOrName: string, topicsArray?: Topic[]): Topic {
    // console.log('getTopicByIdIfExisting topicIdOrName', topicIdOrName)
    // TODO: change to hash-map, while doing topic management
    if ( topicIdOrName == null) {
      let message = 'topicIdOrName wrong: ' + topicIdOrName;
      alert(message)
      throw(new Error(message))
    }
    topicsArray = topicsArray || this.topics
    let retVal = topicsArray.find((topic: Topic) => {
      let id = topic.id;
      if ( id == null ) {
        alert('id null for topic ' + topic.name)
      }
      return id.toLowerCase() === topicIdOrName.toLowerCase()
    })
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
