import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iif } from 'rxjs';
import { Improvement } from 'src/app/core/models/improvement.model';
import { PlayerData } from 'src/app/core/models/playerdata.model';
import { Special } from '../../core/models/special.model';

@Component({
  selector: 'app-specials-list',
  templateUrl: './specials-list.component.html',
  styleUrls: ['./specials-list.component.scss'],
})
export class SpecialsListComponent implements OnInit {
  @Input() playerData: PlayerData = new PlayerData();
  @Output() DoUpdateSubscriptions = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  BuySpecial(name: string) {
    let ind = this.playerData.specialsList.findIndex((a) => a.name == name);

    let special = this.playerData.specialsList[ind];

    let specialNext =
      this.playerData.specialsList[
        this.playerData.specialsList.findIndex((a) => a.name == name) + 1
      ];

    if (this.playerData.peppers >= special.value) {
      console.log('Bought special ' + special.name + ' for ' + special.value);
      special.count++;
      special.unlocked = true;
      specialNext.unlocked = true;

      this.playerData.peppers = this.playerData.peppers - special.value;

      this.ProcessSpecial(special);

      this.DoUpdateSubscriptions.emit(special.value);

    }
  }

  ProcessSpecial(special: Special) {
    let imp = this.playerData.improvementList.find((a) => (a.name == special.target)) || undefined;
    if (imp) {
      imp.increase = imp.increase * 2;
    }
  }
}
