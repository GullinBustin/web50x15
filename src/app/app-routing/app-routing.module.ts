import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from '../main/main.component';
import {StartComponent} from '../start/start.component';
import {EndTurnComponent} from '../end-turn/end-turn.component';

const appRoutes: Routes = [
  {
    path: 'main/:name',
    component: MainComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'end_turn',
    component: EndTurnComponent
  },
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
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
