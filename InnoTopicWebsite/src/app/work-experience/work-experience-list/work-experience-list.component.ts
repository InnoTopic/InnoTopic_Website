import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TopicCategory } from '../../topics-core/topics';
import { topicCategoriesArray } from '../../topics-core/topics-data';
import { TopicsService } from '../../topics-core/topics.service';
import {
  getDictionaryValuesAsArray,
  setIdsFromKeys,
} from '../../utils/dictionary-utils';

import * as _ from "lodash";
import { groupByKeepingOrder } from '../../utils/utils';

(String.prototype as any).replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent implements OnInit {

  public topicCategoriesArray = topicCategoriesArray

  @Input() experience

  byCategory = []

  constructor(
    public topicsService: TopicsService,
  ) {
  }

  ngOnInit() {
    console.log('this.experience', this.experience)
    // this.experience = getDictionaryValuesAsArray(this.experience).map((exp: any) => {
    //   // console.log('this.experience exp', exp)
    //   exp.topic = this.topicsService.getTopicById(exp.topicId)
    //   exp.category = exp.topic.category
    //   return exp
    // })
    this.byCategory = getDictionaryValuesAsArray(
      setIdsFromKeys(groupByKeepingOrder(this.experience, 'category'))
    ) // .sortBy(group => this.experience.indexOf(group[0]))
    // this.byCategory = _.groupBy(this.experience, 'category') // .sortBy(group => this.experience.indexOf(group[0]))
    console.log('this.byCategory', this.byCategory)
  }

  categoryTitle(key: string) {
    return (key as any).replaceAll('_', ' ')
  }

  hasExperienceInCategory(category: TopicCategory) {
    return true // FIXME
    // this.byCategory.
  }
}
