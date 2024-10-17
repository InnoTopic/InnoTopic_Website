import { Component, OnInit } from '@angular/core';
import { peopleArray } from './people.data';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peopleArray = peopleArray;
  showThemeConfig = false;
  isFlipped: { [key: string]: boolean } = {};
 
  constructor() { }

  ngOnInit() {
  }

  flipCard(id: string) {
    this.isFlipped[id] = !this.isFlipped[id];
  }
}