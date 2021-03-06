import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvPageComponent } from './cv-page/cv-page.component';

const routes: Routes = [
  {
    path: 'karol-depka',
    component: CvPageComponent,
  },
  {
    path: '',
    redirectTo: 'karol-depka',
    pathMatch: 'full',
    //   canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' /* FIXME: does not work? */ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
