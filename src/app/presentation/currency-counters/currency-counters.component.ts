import { Component, Input, OnInit } from '@angular/core';
import { PlayerData } from 'src/app/core/models/playerdata.model';

@Component({
  selector: 'app-currency-counters',
  templateUrl: './currency-counters.component.html',
  styleUrls: ['./currency-counters.component.scss']
})
export class CurrencyCountersComponent implements OnInit {

  @Input() playerData: PlayerData = new PlayerData();

  constructor() { }

  ngOnInit(): void {
  }

}
