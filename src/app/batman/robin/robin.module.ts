import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobinComponent } from './robin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: RobinComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RobinComponent]
})
export class RobinModule { }
