
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {updateThemeConfig} from "../actions/theme-config-actions";

function getIonicTextColor(backgroundColor: string, contrastValue: 'high' | 'medium' | 'low'): string {
  // Convert the background color to RGB format
  const hexToRgb = (hex: string): number[] => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      throw new Error(`Invalid hexadecimal color code: ${hex}`);
    }
    const [_, r, g, b] = match;
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
  };
  const rgbBackground: number[] = hexToRgb(backgroundColor);

  // Calculate the relative luminance of the background color
  const luminance: number = (rgbBackground[0] * 0.299 + rgbBackground[1] * 0.587 + rgbBackground[2] * 0.114) / 255;

  // Determine the appropriate foreground color based on the contrast value
  if (contrastValue === 'high') {
    return luminance > 0.5 ? '#000000' : '#ffffff';
  } else if (contrastValue === 'medium') {
    return luminance > 0.4 ? '#000000' : '#ffffff';
  } else if (contrastValue === 'low') {
    return luminance > 0.6 ? '#000000' : '#ffffff';
  } else {
    return '#000000'; // default to black if contrast value is invalid
  }
}



@Injectable()
export class ThemeConfigEffects {
  constructor(private actions$: Actions) {}

  updateThemeConfig$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateThemeConfig),
        tap((action) => {
          const root = document.documentElement.style;
          for (const [key, value] of Object.entries(action)) {
            // const variable = `--${key.replace('_', '-')}`;
            const variable = `--${key.replace(/_/g, '-')}`;
            const val = variable.startsWith('--shadow') ? `${value}px` : value;
            root.setProperty(variable, val);

            //--shadow-light-color: #f0f0f0;
            root.setProperty('--shadow-light-color', `#ffffff${action.shadow_opacity}`)
            root.setProperty('--shadow-dark-color' , `#000000${action.shadow_opacity}`)
            const contrastValue = 'high';
            const backgroundColor = action.ion_background_color;
            if ( backgroundColor ) {
              let fg = getIonicTextColor(backgroundColor, contrastValue);
              root.setProperty('--ion-text-color' , fg)
              root.setProperty('--color' , fg)
            }
            const primaryColor = action.ion_color_primary;
            if ( primaryColor ) {
              let fg = getIonicTextColor(primaryColor, contrastValue);
              root.setProperty('--ion-color-primary-contrast' , fg)
            }
            const secondaryColor = action.ion_color_primary;
            if ( secondaryColor ) {
              let fg = getIonicTextColor(secondaryColor, contrastValue);
              root.setProperty('--ion-color-secondary-contrast' , fg)
            }

            //--shadow-dark-color: #d0d0d0;
            localStorage.setItem('theme_config', JSON.stringify(action));
          }
        }),
      ),
    { dispatch: false },
  );
}
