
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {ThemeConfigState} from "../../models/theme-config-state.model";
import {updateThemeConfig} from "../../store/actions/theme-config-actions";

@Component({
  selector: 'app-theme-config',
  templateUrl: './theme-config.component.html',
  styleUrls: ['./theme-config.component.scss'],
})
export class ThemeConfigComponent implements OnInit {
  themeConfigForm: FormGroup;

  themeConfig$: Observable<ThemeConfigState>;

  constructor(private fb: FormBuilder, private store: Store<{ themeConfig: ThemeConfigState }>) {
    this.themeConfigForm = this.fb.group({
      primary_color: '',
      secondary_color: '',
      background_color: '',
      shadow_offset_x: '',
      shadow_offset_y: '',
      shadow_blur_radius: '',
    });

    this.themeConfig$ = this.store.select('themeConfig');
  }

  ngOnInit(): void {
    // this.themeConfig$.subscribe((themeConfig) => {
    //   this.themeConfigForm.patchValue({
    //     primary_color: themeConfig.primary_color,
    //     secondary_color: themeConfig.secondary_color,
    //     background_color: themeConfig.background_color,
    //     shadow_offset_x: themeConfig.shadow_offset_x,
    //     shadow_offset_y: themeConfig.shadow_offset_y,
    //     shadow_blur_radius: themeConfig.shadow_blur_radius,
    //   });
    // });

    this.themeConfigForm.valueChanges.subscribe((value) => {
      this.store.dispatch(updateThemeConfig(value));
    });
  }
}
