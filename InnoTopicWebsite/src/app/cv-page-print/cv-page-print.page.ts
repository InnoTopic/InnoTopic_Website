import { Component, OnInit } from '@angular/core';
import {PrintService} from "../TopicFriendsShared3/topics-core/print.service";

@Component({
  selector: 'app-cv-page-print',
  templateUrl: './cv-page-print.page.html',
  styleUrls: ['./cv-page-print.page.scss'],
})
export class CvPagePrintPage implements OnInit {

  constructor() {
    console.log('CvPagePrintPage ctor')
    // PrintService.isPrint = true
  }

  ngOnInit() {
  }

}
