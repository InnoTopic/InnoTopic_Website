import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeDemoPage } from './theme-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ThemeDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeDemoPageRoutingModule {}
