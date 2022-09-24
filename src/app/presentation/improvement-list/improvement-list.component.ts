import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PlayerData } from 'src/app/core/models/playerdata.model';
import { Improvement } from '../../core/models/improvement.model';

@Component({
  providers: [ AppComponent],
  selector: 'app-improvement-list',
  templateUrl: './improvement-list.component.html',
  styleUrls: ['./improvement-list.component.scss'],
})
export class ImprovementListComponent implements OnInit {
  private readonly impPercentage = 1.15;

  @Input() playerData!: PlayerData;
  @Output() DoUpdateSubscriptions = new EventEmitter();

  constructor(private appComponent: AppComponent) {}

  ngOnInit(): void {}

  BuyImprovement(name: string) {
    let ind = this.playerData.improvementList.findIndex((a) => a.name == name);

    let imp = this.playerData.improvementList[ind];

    let impNext =
      this.playerData.improvementList[
        this.playerData.improvementList.findIndex((a) => a.name == name) + 1
      ];

    if (this.playerData.peppers >= imp.value) {
      this.appComponent.showSuccess("Bought improvement "+ imp.name + " for " +imp.value.toFixed(2) + ' peppers');
      imp.count++;
      imp.unlocked = true;
      impNext.unlocked = true;

      this.playerData.peppers = this.playerData.peppers - imp.value;

      this.DoUpdateSubscriptions.emit(imp.value);

      imp.value = imp.value * this.impPercentage;
    }
  }
}
