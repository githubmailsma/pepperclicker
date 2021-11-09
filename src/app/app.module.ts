import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardComponent } from './board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { ImprovementListComponent } from './improvement-list/improvement-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    ImprovementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [NgbModule, BoardComponent, ImprovementListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
