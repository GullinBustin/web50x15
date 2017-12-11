import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from '../main/main.component';
import {StartComponent} from '../start/start.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  { path: '', redirectTo: '/start', pathMatch: 'full' }
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
export class AppRoutingModule { }
