import { Component, OnInit, Output, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, Subscription, timer } from 'rxjs';
import { GameDataRepository } from 'src/app/core/repositories/gamedata.repository';
import { PlayerDataRepository } from 'src/app/core/repositories/playerdata.repository';
import { GameDataJsonRepository } from 'src/app/data/repositories/gamedata-localjson.repository';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(private gameDataRepository: GameDataRepository , private playerDataRepository: PlayerDataRepository, private router: ActivatedRoute) {
  }



  @Output() improvementList: any;
  @Output() specialsList: any;
  @Output()
  public get peppers(): number {
    return this.playerDataRepository.peppers;
  }
  public set peppers(value: number) {
    this.playerDataRepository.peppers = value;
  }

  public peppersPerSecond: number = 0;


  private subscriptionList: Subscription[] = [];
  public everySecond: Observable<number> = timer(0, 1000);

  public starttime?: Date;

  ngOnInit(): void {
    this.gameDataRepository.getAllImprovements().subscribe(data => this.improvementList = data);
    this.gameDataRepository.getAllSpecials().subscribe( data => this.specialsList = data);
    this.playerDataRepository.Load();

    this.starttime = new Date();
  }

  ClickHarvest(value:number) {
    this.peppers = this.peppers + value;
  }

  UpdateSubscriptions(costPeppers: number) {
    this.peppers = this.peppers - costPeppers;

    this.subscriptionList?.forEach((element) => {
      element.unsubscribe();
    });
    this.subscriptionList = [];
    this.peppersPerSecond = 0;

    this.improvementList.forEach((element: { count: number; increase: number; }) => {
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
