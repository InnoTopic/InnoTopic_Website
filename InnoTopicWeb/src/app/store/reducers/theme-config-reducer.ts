import {createReducer, on} from '@ngrx/store';
import {updateThemeConfig} from "../actions/theme-config-actions";
import {ThemeConfigState} from "../../models/theme-config-state.model";

export const initialState: ThemeConfigState = {
  primary_color: '#007bff',
  secondary_color: '#6c757d',
  background_color: '#f8f9fa',
  shadow_offset_x: '5px',
  shadow_offset_y: '5px',
  shadow_blur_radius: '10px',
};

export const themeConfigReducer = createReducer(
  initialState,
  on(updateThemeConfig, (state, action) => {
    return { ...state, ...action };
  }),
);
