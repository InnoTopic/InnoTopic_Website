// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
//
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
//
// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule, IonicModule.forRoot(), AppRoutingModule
//   ],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}


import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {Store, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ThemeConfigEffects } from './store/effects/theme-config.effects';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import {ThemeConfigComponent} from "./themes/theme-config/theme-config.component";
import {initialState, themeConfigReducer} from "./store/reducers/theme-config-reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {updateThemeConfig} from "./store/actions/theme-config-actions";


export function initializeApp(store: Store) {
  return () => {
    const storageVal = localStorage.getItem('theme_config');

    const state = storageVal ? JSON.parse(storageVal) : initialState;
    store.dispatch(updateThemeConfig(state));
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({ themeConfig: themeConfigReducer }),
    EffectsModule.forRoot([ThemeConfigEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [Store],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
