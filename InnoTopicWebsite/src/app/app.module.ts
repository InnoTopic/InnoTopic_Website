import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CvPageModule } from './cv-page/cv-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CvPageModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
