import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-samples',
  templateUrl: './theme-samples.component.html',
  styleUrls: ['./theme-samples.component.scss'],
})
export class ThemeSamplesComponent  implements OnInit {

  colorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger']

  constructor() { }

  ngOnInit() {}

}
