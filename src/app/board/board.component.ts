import { Component, OnInit, Output, Pipe } from '@angular/core';
import { iif, Observable, Subscription, timer } from 'rxjs';
import { Improvement } from '../models/improvement.model';
import { GamedataService } from '../services/gamedata.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(private gamedataService: GamedataService) {}

  @Output() improvementList: Improvement[] = [
    new Improvement(
      'Hydroponics',
      6,
      0,
      1,
      false,
      'A smart irrigation system to grow substantially more peppers per second.'
    ),
  ];

  @Output() peppers: number = 0;
  public peppersPerSecond: number = 0;


  private subscriptionList: Subscription[] = [];
  public everySecond: Observable<number> = timer(0, 1000);

  public starttime?: Date;

  ngOnInit(): void {
    this.getAllImprovements();
    this.starttime = new Date();
  }
  getAllImprovements(): void {
    this.gamedataService.getImprovements().subscribe((improvements: any) => {
      this.improvementList = improvements;
    });
  }

  ClickHarvest(value:number) {
    this.peppers = this.peppers + value;
    //this.gamedataService.update0,0:Pepper(10);
  }



  UpdateSubscriptions(costPeppers: number) {
    this.peppers = this.peppers - costPeppers;

    this.subscriptionList?.forEach((element) => {
      element.unsubscribe();
    });
    this.subscriptionList = [];
    this.peppersPerSecond = 0;

    this.improvementList.forEach((element) => {
      if (element.count > 0) {
        let subscription: Subscription;

        this.everySecond = timer(0, 1000 / (element.increase * element.count));

        subscription = this.everySecond.subscribe((seconds) => {
          this.ClickHarvest(1);
        });

        this.peppersPerSecond =
          this.peppersPerSecond + element.increase * element.count;

        this.subscriptionList?.push(subscription);
      }
    });
  }
}
