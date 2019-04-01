import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CvPageModule } from './cv-page/cv-page.module';
import { SharedModule } from './shared/shared.module';
import { TopicsSharedModule } from './topics-shared/topics-shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CvPageModule,
    TopicsSharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
