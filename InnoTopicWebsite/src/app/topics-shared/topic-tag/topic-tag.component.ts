import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { HighlightService } from '../../topics-core/highlight.service';
import {TagEntry} from '../../topics-core/tag-entry'
import {TopicsService} from '../../topics-core/topics.service'


export class TopicInterest {
  // idea: hourly / per-minute rates (in Pro version? :) )
  // name: string;
  constructor(public tagEntry: TagEntry,
              // public active?: boolean,
              // public level?: string, // level of expertise

  ) {

  }

  // potential in the future: where. E.g. play soccer where
}

@Component({
  selector: 'app-topic-tag',
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss']
})
export class TopicTagComponent implements OnInit {

  /* Input-only for convenience; don't use internally; as it might have been mangled */
  @Input() tId: string;
  @Input() tag: TopicInterest;
  @Input() editable: boolean;
  // @Input() tagListModel: TagListModel
  // @Input() relatedTopicLists = [];
  @Input() isCustomClick: boolean = false

  @Output() clickTopic = new EventEmitter<any>()
  height = '18px';
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

  // shouldHighlightSymmetric() {
  //   return (
  //     this.relatedTopicLists &&
  //     this.relatedTopicLists.symmetric &&
  //     this.relatedTopicLists.symmetric.tagExists(this.tag.tagEntry)
  //   )
  // }
  //
  // shouldHighlightSupplyDemandSame() {
  //   return (
  //     this.relatedTopicLists &&
  //     this.relatedTopicLists.supplyDemandSame &&
  //     this.relatedTopicLists.supplyDemandSame.tagExists(this.tag.tagEntry)
  //   )
  // }
  //
  // shouldHighlightSupplyDemandMatch() {
  //   return (
  //     this.relatedTopicLists &&
  //     this.relatedTopicLists.supplyDemandMatch &&
  //     this.relatedTopicLists.supplyDemandMatch.tagExists(this.tag.tagEntry)
  //   )
  // }

  onMouseEnter() {
    this.highlightService.setHighlight(this.tag.tagEntry.id)
  }
}
