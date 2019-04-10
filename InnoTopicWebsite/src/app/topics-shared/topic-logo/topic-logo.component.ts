import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../topics-core/topic';

@Component({
  selector: 'app-topic-logo',
  templateUrl: './topic-logo.component.html',
  styleUrls: ['./topic-logo.component.scss']
})
export class TopicLogoComponent implements OnInit {

  @Input() public topic: Topic;
  @Input() public url;
  @Input() public width = 18;
  @Input() public height = 18;
  @Input() public margin = 5;

  public styles;

  constructor() { }

  ngOnInit() {
    if ( this.topic ) {
      this.url = this.topic.logo
      this.width = this.topic.logoTypeWide ? 48 : 18
      this.height = this.topic.logoTypeWide ? 24 : 18
    }
    this.styles = {
      'width.px': this.width,
      // 'height.px': this.height,
      'margin-right.px': this.margin,
      'vertical-align': 'middle'
    }
  }

}
