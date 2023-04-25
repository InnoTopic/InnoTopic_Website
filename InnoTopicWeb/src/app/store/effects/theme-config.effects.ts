
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
            const variable = `--ion-${key.replace('_', '-')}`;
            const val = variable.startsWith('--shadow') ? `${value}px` : value;
            root.setProperty(variable, val);
          }
        }),
      ),
    { dispatch: false },
  );
}
