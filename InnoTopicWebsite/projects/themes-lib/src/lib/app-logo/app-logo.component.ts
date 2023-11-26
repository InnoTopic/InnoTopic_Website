import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.sass'],
})
export class AppLogoComponent implements OnInit {

  @Input()
  withText = true

  @Input()
  hideTextOnSmallScreens = false

  /** workaround for logo disappearing on page navigation */
  fillSuffix = (''+Math.random()).replace('.', '')

  fill1Id = 'fill1-' + this.fillSuffix
  fill2Id = 'fill2-' + this.fillSuffix

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
