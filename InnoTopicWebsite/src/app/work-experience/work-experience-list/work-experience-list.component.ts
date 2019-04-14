import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TopicsService } from '../../topics-core/topics.service';
import { getDictionaryValuesAsArray } from '../../utils/dictionary-utils';

import * as _ from "lodash";

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent implements OnInit {

  @Input() experience

  byCategory = {}

  constructor(
    public topicsService: TopicsService,
  ) {
  }

  ngOnInit() {
    this.experience = getDictionaryValuesAsArray(this.experience).map(exp => {
      exp.topic = this.topicsService.getTopicById(exp.topicId)
      exp.category = exp.topic.category
      return exp
    })
    this.byCategory = _.groupBy(this.experience, 'category')
  }

}
