import { createAction, props } from '@ngrx/store';

export const updateThemeConfig = createAction(
  '[Theme Config] Update Theme Config',
  props<{
    ion_color_primary?: string;
    ion_color_secondary?: string;
    ion_background_color?: string;
    shadow_offset?: string;
    // shadow_offset_x?: string;
    // shadow_offset_y?: string;
    shadow_blur_radius?: string;
  }>(),
);
