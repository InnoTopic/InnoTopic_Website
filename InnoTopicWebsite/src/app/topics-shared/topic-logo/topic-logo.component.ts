import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../topics-core/topic';
import { TopicsService } from '../../topics-core/topics.service';

@Component({
  selector: 'app-topic-logo',
  templateUrl: './topic-logo.component.html',
  styleUrls: ['./topic-logo.component.scss']
})
export class TopicLogoComponent implements OnInit {

  @Input() public topic: Topic | string;
  public _topic: Topic
  @Input() public url;
  @Input() public width = 18;
  @Input() public height = 18;
  @Input() public margin = 5;

  public styles;

  constructor(
    public topicsService: TopicsService,
  ) { }

  ngOnInit() {
    if ( typeof this.topic === 'string' ) {
      this.topic = this.topicsService.getTopicById(this.topic)
    }
    if ( this.topic ) {
      this.url = this.topic.logo
      this.width = this.topic.logoTypeWide ? 48 : 18
      this.height = this.topic.logoTypeWide ? 24 : 18
    }
    this._topic = this.topic
    this.styles = {
      'width.px': this.width, // TODO: try limiting width instead of height
      'height.px': this.height, // better to specify both width and height, coz less layout jumping on loading
      'margin-right.px': this.margin,
      'vertical-align': 'middle'
    }
  }

}
