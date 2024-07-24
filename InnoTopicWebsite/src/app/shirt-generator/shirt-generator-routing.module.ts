import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtGeneratorPage } from './shirt-generator.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtGeneratorPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtGeneratorPageRoutingModule {}
