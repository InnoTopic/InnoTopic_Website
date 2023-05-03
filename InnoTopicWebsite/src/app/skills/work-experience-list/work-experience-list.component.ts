import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TopicCategory } from '../../TopicFriendsShared3/topics-core/topics';
import { topicCategoriesArray } from '../../TopicFriendsShared3/topics-core/topics-data';
import { TopicsService } from '../../TopicFriendsShared3/topics-core/topics.service';
import {
  getDictionaryValuesAsArray,
  setIdsFromKeys,
} from '../../utils/dictionary-utils';

import { groupByKeepingOrder } from '../../utils/utils';
import {groupBy} from "lodash-es";

(String.prototype as any).replaceAll = function(search: string, replacement: string) {
  const target = this;
  return target.split(search).join(replacement);
};

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.sass']
})
export class WorkExperienceListComponent implements OnInit {

  public topicCategoriesArray = topicCategoriesArray

  @Input() experienceByName!: any

  @Input() showIcons!: boolean

  experienceArr!: any

  byCategory = []
  experienceByCategory = {}

  constructor(
    public topicsService: TopicsService,
  ) {
  }

  ngOnInit() {
    // console.log('this.experience', this.experienceByName)
    this.experienceArr = getDictionaryValuesAsArray(this.experienceByName).map((exp: any) => {
      // console.log('this.experience exp', exp)
      exp.topic = this.topicsService.getTopicById(exp.topicId)
      exp.category = exp.topic.category
      return exp
    })
    this.byCategory = getDictionaryValuesAsArray(
      setIdsFromKeys(groupByKeepingOrder(this.experienceArr, 'category'))
    ) // .sortBy(group => this.experience.indexOf(group[0]))
    this.experienceByCategory = groupBy(this.experienceArr, 'category') // .sortBy(group => this.experience.indexOf(group[0]))
    // console.log('this.byCategory', this.byCategory)
  }

  categoryTitle(key: string) {
    return (key as any).replaceAll('_', ' ')
  }

  hasExperienceInCategory(category: TopicCategory) {
    let experienceByCat = (this.experienceByCategory as any)[category.name];
    // console.log('hasExperienceInCategory', arguments, this.experienceByCategory)
    // return true
    return experienceByCat // FIXME
    // this.byCategory.
  }
}
