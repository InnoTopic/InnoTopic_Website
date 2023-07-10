
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {tap, throttleTime} from 'rxjs/operators';
import {updateThemeConfig} from "../actions/theme-config-actions";
import {getIonicTextColor, hexToRgb} from "../../utils/colors/colorUtils";
import {setIonicColorSteps, setIonicColorVarHexAndRgb} from "../../utils/colors/ionic-color-utils";
import {adjustLuminance} from "../../utils/colors/adjustLuminance";

@Injectable()
export class ThemeConfigEffects {
  constructor(private actions$: Actions) {}

  updateThemeConfig$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateThemeConfig),
        // withLatestFrom(this.store.pipe(select(fromRoot.selectEntireState))),
        tap((action) => {
          console.log(`action`, action)
          const root = document.documentElement.style;
          for (const [key, value] of Object.entries(action)) {
            // const variable = `--${key.replace('_', '-')}`;
            const varName = `--${key.replace(/_/g, '-')}`;
            const val = varName.startsWith('--shadow') ? `${value}px` : value;
            root.setProperty(varName, val);
            // set shade and tint:
            // TODO: might be better to increase/decrease luminance by ~0.2
            root.setProperty(`${varName}-shade`,
              `color-mix(in srgb, var(${varName}) 75%, black`)
            root.setProperty(`${varName}-tint`,
              `color-mix(in srgb, var(${varName}) 75%, white`)

            //--shadow-light-color: #f0f0f0;
            /* FIXME: shadows should be based on luminance increase/decrease, instead of opacity which is like mixing;
                e.g. white is much farther away from dark bg, than black */
            const shadowLumAdjust = (action.shadow_opacity as number /* FIXME */)/100 // TODO: calculate Max diff from bg lum to black/white (coz / 100 causes part of the slider to be HSL 1.0)
            // root.setProperty('--shadow-light-color', `#ffffff${action.shadow_opacity}`)
            root.setProperty('--shadow-light-color', adjustLuminance(action.ion_background_color as string, shadowLumAdjust))
            // root.setProperty('--shadow-dark-color' , `#000000${action.shadow_opacity}`)
            root.setProperty('--shadow-dark-color', adjustLuminance(action.ion_background_color as string, -shadowLumAdjust))
            root.setProperty('--ion-item-border-color', 'var(--ion-color-step-200)')

            const contrastValue = 'high';
            const backgroundColor = action.ion_background_color;
            if ( backgroundColor ) {
              let fg = getIonicTextColor(backgroundColor, contrastValue);
              root.setProperty('--ion-text-color' , fg)
              root.setProperty('--color' , fg)
              setIonicColorSteps(fg)
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

  /* FIXME test / fix */
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
