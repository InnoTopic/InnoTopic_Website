import { Component, OnInit } from '@angular/core';

/** way to wrap a single space without adding the significant whitespace around it */
@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.sass']
})
export class SpacerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
