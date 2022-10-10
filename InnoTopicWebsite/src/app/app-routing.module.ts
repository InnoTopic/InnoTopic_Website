import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvPageComponent } from './cv-page/cv-page.component';
import { EpicEliteComponent } from './jobs/epic-elite/epic-elite.component';
import { ShirtComponent } from './shirt/shirt.component';
import {TechGraphD3Component} from './cv-page/tech-graph-d3/tech-graph-d3.component';

const routes: Routes = [
  {
    path: 'karol-depka',
    component: CvPageComponent,
  },
  {
    path: 'jobs/epic-elite',
    component: EpicEliteComponent,
  },
  {
    path: 'shirt',
    component: ShirtComponent,
  },
  {
    path: 'tech-graph-d3',
    component: TechGraphD3Component,
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
