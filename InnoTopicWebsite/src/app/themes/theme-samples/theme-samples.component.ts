import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ThemeConfigState} from "../../models/theme-config-state.model";

@Component({
  selector: 'app-theme-samples',
  templateUrl: './theme-samples.component.html',
  styleUrls: ['./theme-samples.component.scss'],
})
export class ThemeSamplesComponent  implements OnInit {

  abs = Math.abs

  colorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger']

  // themeColor$: Observable<string> = this.store.select('shadow_blur_radius');
  themeColor$: Observable<any> = this.store

  constructor(
    private store: Store<ThemeConfigState>
  ) {
  }

  ngOnInit() {}

}
