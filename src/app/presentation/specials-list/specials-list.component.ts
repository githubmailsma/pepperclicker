import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Special } from '../../core/models/special.model';

@Component({
  selector: 'app-specials-list',
  templateUrl: './specials-list.component.html',
  styleUrls: ['./specials-list.component.scss']
})
export class SpecialsListComponent implements OnInit {

  @Input() specialsList: Special[] = [];
  @Input() peppers: number = -1;
  @Output() DoUpdateSubscriptions = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ShouldDisplay(peppers: number): boolean {
    let lowestVal = 1000000000;
    for(let i = 0; i < this.specialsList.length; i++) {
      if (lowestVal > this.specialsList[i].value) {
        lowestVal = this.specialsList[i].value;
      }
    }

    // heb ik meer peppers dan de kostprijs van het goedkoopste item?
    return peppers >= lowestVal;
  }

  BuySpecial(name: string) {
    let ind = this.specialsList.findIndex((a) => a.name == name);

    let imp = this.specialsList[ind];

    let impNext =
      this.specialsList[
        this.specialsList.findIndex((a) => a.name == name) + 1
      ];

    if (this.peppers >= imp.value) {
      imp.count++;
      imp.unlocked = true;
      impNext.unlocked = true;

      this.peppers = this.peppers - imp.value;

      this.DoUpdateSubscriptions.emit(imp.value);
    }
  }

}
