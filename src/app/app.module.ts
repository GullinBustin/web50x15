import {ApplicationInitStatus, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PreguntaComponent } from './main/pregunta/pregunta.component';
import { StartComponent } from './start/start.component';
import { EndTurnComponent } from './end-turn/end-turn.component';
import { ComodinesComponent } from './main/comodines/comodines.component';
import { PopupGoogleComponent } from './main/popup-google/popup-google.component';
import { PlayerMenuComponent } from './start/player-menu/player-menu.component';
import { GameOverComponent } from './game-over/game-over.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreguntaComponent,
    StartComponent,
    EndTurnComponent,
    ComodinesComponent,
    PopupGoogleComponent,
    PlayerMenuComponent,
    GameOverComponent
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
