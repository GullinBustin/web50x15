import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { RouteModule} from './route/route.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TestRoutesModule } from './test-routes/test-routes.module';


const appRoutes: Routes = [
  { path: 'main/:id',      component: TestComponent },
  { path: '',
    redirectTo: '/main/0',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    RouteModule,
    HttpClientModule,
    TestRoutesModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
