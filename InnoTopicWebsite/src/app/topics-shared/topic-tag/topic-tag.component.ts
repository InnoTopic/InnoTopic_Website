import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../../TopicFriendsShared3/topics-core/highlight.service';
import { Topic } from '../../TopicFriendsShared3/topics-core/Topic';
import { TopicsService } from '../../TopicFriendsShared3/topics-core/topics.service';

export class TopicInterest {
  // idea: hourly / per-minute rates (in Pro version? :) )
  // name: string;
  constructor(public tagEntry: Topic,
              // public active?: boolean,
              // public level?: string, // level of expertise

  ) {

  }

  // potential in the future: where. E.g. play soccer where
}

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicTagComponent implements OnInit {

  /* Input-only for convenience; don't use internally; as it might have been mangled */
  @Input() tId: string;
  @Input() tag: TopicInterest;
  @Input() editable: boolean;
  @Input() isCustomClick: boolean = false
  @Input() showLogo: boolean = true

  @Output() clickTopic = new EventEmitter<any>()
  isHighlighted = false

  constructor(
    public topicsService: TopicsService,
    public highlightService: HighlightService,
  ) { }

  ngOnInit() {
    // console.log('related tags', this.relatedTopicLists)
    // console.log('TopicTagComponent: tag', this.tag)
    const topicById = this.topicsService.getTopicById(this.tId)
    if ( ! topicById ) {
      console.error('! topicById', this.tag, this.tId)
    }
    this.tag = new TopicInterest(topicById)

    this.highlightService.highlight$.subscribe(id => {
      this.isHighlighted = this.tag.tagEntry.id === id
    })
  }

  onMouseEnter() {
    // this.highlightService.setHighlight(this.tag.tagEntry.id)
  }
}
