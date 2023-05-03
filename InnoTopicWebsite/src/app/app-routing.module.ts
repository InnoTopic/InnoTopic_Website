import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {TechGraphD3Component} from "./cv-page/tech-graph-d3/tech-graph-d3.component";
// import {TechGraphD3Index1Component} from "./cv-page/tech-graph-d3-index1/tech-graph-d3-index1.component";
// import {CvPageComponent} from "./cv-page/cv-page.component";
// import {EpicEliteComponent} from "./jobs/epic-elite/epic-elite.component";
// import {ShirtComponent} from "./shirt/shirt.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'karol-depka',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'theme-demo',
    loadChildren: () => import('./themes/theme-demo/theme-demo.module').then( m => m.ThemeDemoPageModule)
  },
  {
    path: 'shirt',
    loadChildren: () => import('./shirt/shirt.module').then( m => m.ShirtPageModule)
  },
  // ====
  // {
  //   path: 'karol-depka',
  //   loadChildren: () => import('./cv-page/cv-page.module').then( m => m.CvPageModule)
  // },

  // {
  //   path: 'karol-depka',
  //   component: CvPageComponent,
  // },
  // {
  //   path: 'jobs/epic-elite',
  //   component: EpicEliteComponent,
  // },
  // {
  //   path: 'shirt',
  //   component: ShirtComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: 'karol-depka',
  //   pathMatch: 'full',
  //   //   canActivate: [AuthGuard]
  // },
  {
    path: 'karol-depka',
    loadChildren: () => import('./cv/cv.module').then( m => m.CvPageModule)
  },
  //
  // // Experimental routes
  // {
  //   path: 'tech-graph-d3',
  //   component: TechGraphD3Component,
  // },
  // {
  //   path: 'tech-graph-d3-index1',
  //   component: TechGraphD3Index1Component,
  //   /* FCK, no lazy loading; move to Ionic pages anyway */
  // },
  //
  // { path: '**', redirectTo: 'karol-depka' /* FIXME: does not work? */ },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
