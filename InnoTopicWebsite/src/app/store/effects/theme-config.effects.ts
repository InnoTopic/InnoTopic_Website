
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {tap, throttleTime} from 'rxjs/operators';
import {updateThemeConfig} from "../actions/theme-config-actions";
import {getIonicTextColor, hexToRgb, setIonicColorVarHexAndRgb} from "../../utils/colors/colorUtils";

@Injectable()
export class ThemeConfigEffects {
  constructor(private actions$: Actions) {}

  updateThemeConfig$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateThemeConfig),
        tap((action) => {
          console.log(`action`, action)
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
              const varName = '--ion-color-primary-contrast';
              setIonicColorVarHexAndRgb(root, varName, fg);
            }
            const secondaryColor = action.ion_color_secondary;
            if ( secondaryColor ) {
              let fg = getIonicTextColor(secondaryColor, contrastValue);
              setIonicColorVarHexAndRgb(root, '--ion-color-secondary-contrast', fg);
            }

            //--shadow-dark-color: #d0d0d0;
            localStorage.setItem('theme_config', JSON.stringify(action)); // FIXME extract to another effect
          }
        }),
      ),
    { dispatch: false },
  );

  setLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateThemeConfig),
        throttleTime(1000),
        tap((action) => {
          localStorage.setItem('theme_config', JSON.stringify(action));
        }),
      ),
    { dispatch: false },
  );

}
