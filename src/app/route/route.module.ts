import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from '../test/test.component';
import { Test2Component} from '../test2/test2.component';
import {BatmanModule} from '../batman/batman.module';

const appRoutes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test2',
    component: Test2Component
  },
  {
    path: 'batman',
    loadChildren: 'app/batman/batman.module#BatmanModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }
