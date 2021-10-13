import { Component, OnInit } from '@angular/core';
import { highlights } from '../skills/work-experience-highlights-data';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.sass']
})
export class ShirtComponent implements OnInit {

  highlights = highlights

  constructor() { }

  ngOnInit() {
  }

}
