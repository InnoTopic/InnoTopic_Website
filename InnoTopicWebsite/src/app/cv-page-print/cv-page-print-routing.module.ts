import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvPagePrintPage } from './cv-page-print.page';

const routes: Routes = [
  {
    path: '',
    component: CvPagePrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvPagePrintPageRoutingModule {}
