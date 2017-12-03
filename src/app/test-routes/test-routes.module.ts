import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { TestRoutesRoutingModule } from './test-routes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutesRoutingModule
  ],
  declarations: [Screen1Component, Screen2Component]
})
export class TestRoutesModule { }
