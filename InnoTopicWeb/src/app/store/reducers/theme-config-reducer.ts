import {createReducer, on} from '@ngrx/store';
import {updateThemeConfig} from "../actions/theme-config-actions";
import {ThemeConfigState} from "../../models/theme-config-state.model";

export const initialState: ThemeConfigState = {
  ion_color_primary: '#007bff',
  ion_color_secondary: '#6c757d',
  // ion_background_color: '#f8f9fa',
  ion_background_color: '#e0e0e0', //'#ff8080',
  shadow_offset: '5px',
  // shadow_offset_x: '5px',
  // shadow_offset_y: '5px',
  shadow_blur_radius: '10px',
};

export const themeConfigReducer = createReducer(
  initialState,
  // on(ThemeConfigActions.init, (state) => state),
  on(updateThemeConfig, (state, action) => {
    return { ...state, ...action };
  }),
);
