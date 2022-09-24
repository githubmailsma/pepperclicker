import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PlayerData } from 'src/app/core/models/playerdata.model';

@Component({
  selector: 'app-earninggold-overview',
  templateUrl: './earninggold-overview.component.html',
  styleUrls: ['./earninggold-overview.component.scss']
})
export class TrainingOverviewComponent implements OnInit {
  private readonly impPercentage = 1.15;

  @Input() playerData: PlayerData = new PlayerData();
  @Output() DoUpdateSubscriptions = new EventEmitter();

  constructor(private appComponent: AppComponent) {}

  ngOnInit(): void {
  }

  BuySellingSkill(name: string) {
    let ind = this.playerData.sellingSkillsList.findIndex((a) => a.name == name);

    let sellingSkill = this.playerData.sellingSkillsList[ind];

    let sellingSkillNext =
      this.playerData.sellingSkillsList[
        this.playerData.sellingSkillsList.findIndex((a) => a.name == name) + 1
      ];

    if (this.playerData.peppers >= sellingSkill.value) {
      this.appComponent.showSuccess("Bought building "+ sellingSkill.name + " for " +sellingSkill.value.toFixed(2) + ' peppers');
      sellingSkill.count++;
      sellingSkill.unlocked = true;
      sellingSkillNext.unlocked = true;

      this.playerData.peppers = this.playerData.peppers - sellingSkill.value;

      this.DoUpdateSubscriptions.emit(sellingSkill.value);

      sellingSkill.value = sellingSkill.value * this.impPercentage;
    }
  }


}
