import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperimentsPage } from './experiments.page';

const routes: Routes = [
  {
    path: '',
    component: ExperimentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperimentsPageRoutingModule {}
