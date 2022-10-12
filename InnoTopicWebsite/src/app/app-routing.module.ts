import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvPageComponent } from './cv-page/cv-page.component';
import { EpicEliteComponent } from './jobs/epic-elite/epic-elite.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TechGraphD3Component } from './cv-page/tech-graph-d3/tech-graph-d3.component';
import { TechGraphD3Index1Component } from './cv-page/tech-graph-d3-index1/tech-graph-d3-index1.component';

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
    path: '',
    redirectTo: 'karol-depka',
    pathMatch: 'full',
    //   canActivate: [AuthGuard]
  },

  // Experimental routes
  {
    path: 'tech-graph-d3',
    component: TechGraphD3Component,
  },
  {
    path: 'tech-graph-d3-index1',
    component: TechGraphD3Index1Component,
  },

  { path: '**', redirectTo: 'karol-depka' /* FIXME: does not work? */ },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
