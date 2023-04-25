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


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ThemeConfigEffects } from './store/effects/theme-config.effects';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import {ThemeConfigComponent} from "./themes/theme-config/theme-config.component";
import {themeConfigReducer} from "./store/reducers/theme-config-reducer";

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
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
