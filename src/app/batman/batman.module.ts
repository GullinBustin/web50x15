import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatmanComponent } from './batman.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: BatmanComponent,
    children: [
      { path: 'robin',    loadChildren: 'app/batman/robin/robin.module#RobinModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BatmanComponent]
})
export class BatmanModule { }
