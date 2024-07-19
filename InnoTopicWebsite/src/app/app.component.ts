import { Component } from '@angular/core';
import {PrintService} from "./TopicFriendsShared3/topics-core/print.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  get isPrint() {
    return PrintService.isPrint
  }


  constructor(
    printService: PrintService,
  ) {}
}
