import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtGeneratorPage } from './shirt-generator.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtGeneratorPage,
    pathMatch: 'full'
  },{
    path: 'window-ai',
    component: ShirtGeneratorPage,
  },{
    path: 'dummy-ai',
    component: ShirtGeneratorPage,
  },{
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtGeneratorPageRoutingModule {}
