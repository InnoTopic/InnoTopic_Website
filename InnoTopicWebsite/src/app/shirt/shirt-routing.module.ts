import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtPage } from './shirt.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtPageRoutingModule {}
