import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../topics-core/Topic';
import { TopicsService } from '../../topics-core/topics.service';

export const defaultIconHeight = 18

@Component({
  selector: 'app-topic-logo',
  templateUrl: './topic-logo.component.html',
  styleUrls: ['./topic-logo.component.scss']
})
export class TopicLogoComponent implements OnInit {

  @Input() public topic: Topic | string;
  public _topic: Topic
  @Input() public url;
  @Input() public width = defaultIconHeight;
  @Input() public height = defaultIconHeight;
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
      if ( this.topic.logoSize ) {
        const lW = this.topic.logoSize[0]
        const lH = this.topic.logoSize[1]
        if ( lH > lW ) {
          this.width = defaultIconHeight
          this.height = defaultIconHeight * lH / lW
        } else {
          this.width = defaultIconHeight * lW / lH
          this.height = defaultIconHeight
        }
      } else {
        this.width = this.topic.logoTypeWide ? 48 : defaultIconHeight
        this.height = this.topic.logoTypeWide ? 24 : defaultIconHeight
      }
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
