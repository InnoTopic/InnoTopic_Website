import { Component, OnInit } from '@angular/core';
import { peopleArray } from './people.data';
import * as d3 from 'd3';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peopleArray = peopleArray;
  showThemeConfig = false;
  isFlipped: { [key: string]: boolean } = {};
  dropdownOpen: { [key: string]: boolean } = {}; // Add this line

  constructor() { }

  ngOnInit() {
  }

  flipCard(id: string) {
    this.isFlipped[id] = !this.isFlipped[id];
  }

  toggleDropdown(event: Event, id: string): void {
    event.stopPropagation(); // Prevents the flipCard function from being triggered
    this.dropdownOpen[id] = !this.dropdownOpen[id];
  }
}
