import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTagPage } from './test-tag.page';

const routes: Routes = [
  {
    path: '',
    component: TestTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTagPageRoutingModule {}
