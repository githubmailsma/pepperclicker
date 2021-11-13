import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { SpecialsListComponent } from './specials-list/specials-list.component';
import { ImprovementListComponent } from './improvement-list/improvement-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BoardComponent,
    SpecialsListComponent,
    ImprovementListComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [BoardComponent]
})
export class PresentationModule { }
