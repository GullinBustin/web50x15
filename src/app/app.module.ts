import {ApplicationInitStatus, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PreguntaComponent } from './main/pregunta/pregunta.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreguntaComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApplicationInitStatus],
  bootstrap: [AppComponent]
})
export class AppModule { }
