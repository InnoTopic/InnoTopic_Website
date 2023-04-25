import { createAction, props } from '@ngrx/store';

export const updateThemeConfig = createAction(
  '[Theme Config] Update Theme Config',
  props<{
    primary_color?: string;
    secondary_color?: string;
    background_color?: string;
    shadow_offset_x?: string;
    shadow_offset_y?: string;
    shadow_blur_radius?: string;
  }>(),
);
