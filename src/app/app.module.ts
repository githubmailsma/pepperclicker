import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './presentation/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PresentationModule } from './presentation/presentation.module';
import { GameDataRepository } from './core/repositories/gamedata.repository';
import { GameDataJsonRepository } from './data/repositories/gamedata-localjson.repository';
import { PlayerDataRepository } from './core/repositories/playerdata.repository';
import { PlayerDataLocalStorageRepository } from './data/repositories/playerdata-localstorage.repository';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    PresentationModule

  ],
  exports: [NgbModule, PresentationModule],
  providers: [
    {provide: GameDataRepository, useClass: GameDataJsonRepository},
    {provide: PlayerDataRepository, useClass: PlayerDataLocalStorageRepository}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
