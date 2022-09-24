import { Component, Input, OnInit } from '@angular/core';
import { PlayerData } from 'src/app/core/models/playerdata.model';

@Component({
  selector: 'app-clickpepper',
  templateUrl: './clickpepper.component.html',
  styleUrls: ['./clickpepper.component.scss']
})
export class ClickpepperComponent implements OnInit {
  @Input() playerData: PlayerData = new PlayerData();

  constructor() { }

  ngOnInit(): void {
  }


  ClickHarvest(value:number) {
    this.playerData.peppers = this.playerData.peppers + value;
  }


}
