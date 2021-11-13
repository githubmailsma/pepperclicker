import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Improvement } from '../../core/models/improvement.model';

@Component({
  selector: 'app-improvement-list',
  templateUrl: './improvement-list.component.html',
  styleUrls: ['./improvement-list.component.scss'],
})
export class ImprovementListComponent implements OnInit {
  private readonly impPercentage = 1.15;

  @Input() improvementList: Improvement[] = [];
  @Input() peppers: number = -1;
  @Output() DoUpdateSubscriptions = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  BuyImprovement(name: string) {
    let ind = this.improvementList.findIndex((a) => a.name == name);

    let imp = this.improvementList[ind];

    let impNext =
      this.improvementList[
        this.improvementList.findIndex((a) => a.name == name) + 1
      ];

    if (this.peppers >= imp.value) {
      imp.count++;
      imp.unlocked = true;
      impNext.unlocked = true;

      this.peppers = this.peppers - imp.value;

      this.DoUpdateSubscriptions.emit(imp.value);

      imp.value = imp.value * this.impPercentage;
    }
  }
}
