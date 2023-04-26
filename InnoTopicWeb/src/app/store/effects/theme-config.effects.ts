
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {updateThemeConfig} from "../actions/theme-config-actions";

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
            //--shadow-dark-color: #d0d0d0;

          }
        }),
      ),
    { dispatch: false },
  );
}
