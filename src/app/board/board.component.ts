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

  improvementJson = `{
    "gamedata": {
      "pepper": 10
    },
    "improvements": [
      {
        "name": "Helping hand",
        "value": 15,
        "count": 0,
        "increase": 0.1,
        "unlocked": true,
        "description": "Grows 1 pepper per 10 seconds"
      },
      {
        "name": "Fertilizer",
        "value": 100,
        "count": 0,
        "increase": 1,
        "unlocked": false,
        "description": "Increase plant growth giving extra 1 peppers per second"
      },
      {
        "name": "Hydroponics",
        "value": 1100,
        "count": 0,
        "increase": 8,
        "unlocked": false,
        "description": "A smart irrigation system to grow 8 more peppers per second"
      },
      {
        "name": "Harvesting robot",
        "value": 12000,
        "count": 0,
        "increase": 15,
        "unlocked": false,
        "description": "An advanced harvesting machine that can pick 15 peppers per second"
      },
      {
        "name": "Advanced Genetics",
        "value": 250000,
        "count": 0,
        "increase": 25,
        "unlocked": false,
        "description": "Manipulate nucleoids to change the pepper DNS and increase the harvest by 25 peppers per second"
      },
      {
        "name": "Pepper cloner",
        "value": 1000000,
        "count": 0,
        "increase": 200,
        "unlocked": false,
        "description": "Allows peppers to multiply as they grow. Grows 200 extra peppers per second"
      }
    ]
  }
  `;


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
    //this.gamedataService.getImprovements().subscribe((improvements: any) => {
    //  this.improvementList = improvements;
    //});
    this.improvementList = JSON.parse(this.improvementJson)["improvements"];
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
