import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Topic } from '../../TopicFriendsShared3/topics-core/Topic';
import { TopicsService } from '../../TopicFriendsShared3/topics-core/topics.service';

export const defaultIconHeight = 18

@Component({
  selector: 'app-topic-logo',
  templateUrl: './topic-logo.component.html',
  styleUrls: ['./topic-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicLogoComponent implements OnInit {

  // debug_showText = false
  debug_showText = true

  @Input() public topic!: Topic | string;
  public _topic!: Topic
  @Input() public url!: string | null;
  @Input() public size = defaultIconHeight;
  @Input() public width?: number;
  @Input() public height?: number;
  @Input() public margin = 2;

  public styles: any;

  constructor(
    public topicsService: TopicsService,
    public changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.width = this.width || this.size
    this.height = this.height || this.size

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
        // this.width *= this.topic.logoTypeWide ? (48 / defaultIconHeight) : 1
        // this.height *= this.topic.logoTypeWide ? (16 / defaultIconHeight) : 1
      }
    }
    this._topic = this.topic
    this.styles = {
      'height.px': this.height, // better to specify both width and height, coz less layout jumping on loading
      'margin-right.px': this.margin,
      'vertical-align': 'middle'
    }
    if ( ! this.topic.logoTypeWide ) {
      this.styles['width.px'] = this.width // TODO: try limiting width instead of height
    }
    this.changeDetectorRef.markForCheck()
  }

}
