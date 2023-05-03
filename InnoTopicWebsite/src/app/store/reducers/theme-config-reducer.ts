import {createReducer, on} from '@ngrx/store';
import {updateThemeConfig} from "../actions/theme-config-actions";
import {ThemeConfigState} from "../../models/theme-config-state.model";

export const initialState: ThemeConfigState = {
  ion_color_primary: '#007bff',
  ion_color_secondary: '#6c757d',
  // ion_background_color: '#f8f9fa',
  // ion_background_color: '#ff3434', //'#ff8080',
  ion_background_color: '#ffffff',
  shadow_offset: '5',
  // shadow_offset_x: '5px',
  // shadow_offset_y: '5px',
  shadow_blur_radius: '10',
  shadow_opacity: '50',
};

export const themeConfigReducer = createReducer(
  initialState,
  // on(ThemeConfigActions.init, (state) => state),
  on(updateThemeConfig, (state, action) => {
    return { ...state, ...action };
  }),
);
