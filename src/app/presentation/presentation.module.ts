import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { SpecialsListComponent } from './specials-list/specials-list.component';
import { ImprovementListComponent } from './improvement-list/improvement-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BouncerComponent } from './bouncer/bouncer.component';
import { ToastComponent } from './toast/toast.component';
import { AppComponent } from '../app.component';
import { CurrencyCountersComponent } from './currency-counters/currency-counters.component';
import { TrainingOverviewComponent } from './earninggold-overview/earninggold-overview.component';
import { ClickpepperComponent } from './clickpepper/clickpepper.component';


@NgModule({
  declarations: [
    BoardComponent,
    SpecialsListComponent,
    ImprovementListComponent,
    NavbarComponent,
    BouncerComponent,
    ToastComponent,
    CurrencyCountersComponent,
    TrainingOverviewComponent,
    ClickpepperComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [ AppComponent],
  exports: [BoardComponent]
})
export class PresentationModule { }
