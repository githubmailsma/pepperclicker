import { Component, OnInit, Output, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, Subscription, timer } from 'rxjs';
import { PlayerData } from 'src/app/core/models/playerdata.model';
import { SellingSkill } from 'src/app/core/models/selling-skills.model';
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



  @Output()
  public get improvementList(): any {
    return this.playerDataRepository.playerData.improvementList;
  }
  public set improvementList(value: any) {
    this.playerDataRepository.playerData.improvementList = value;
  }

  @Output() specialsList: any;

  @Output()
  public get playerData(): PlayerData {
    return this.playerDataRepository.playerData;
  }
  public set playerData(value: PlayerData) {
    this.playerDataRepository.playerData = value;
  }


  private _improvementList: any;
  private _specialsList: any;
  private _sellingSkillsList: any;

  public peppersPerSecond: number = 0;
  public goldPerSecond: number = 0;


  private subscriptionList: Subscription[] = [];
  public everySecond: Observable<number> = timer(0, 1000);

  public starttime?: Date;

  ngOnInit(): void {
    this.gameDataRepository.getAllImprovements().subscribe(data => this._improvementList = data);
    this.gameDataRepository.getAllSpecials().subscribe( data => this._specialsList = data);
    this.gameDataRepository.getAllsellingSkills().subscribe( data => this._sellingSkillsList = data);

    this.playerDataRepository.Init(this._improvementList, this._specialsList, this._sellingSkillsList);
    this.playerDataRepository.Load();

    // Create new gamedata if it doesn't exist yet
    if (this.playerDataRepository.playerData.improvementList == null || this.playerDataRepository.playerData.improvementList?.length == 0) {
      this.playerDataRepository.Reset();
    }

    this.starttime = new Date();
    this.UpdateSubscriptions(0);
  }


  GoldHarvest(value:number, conversionFactor: number) {
    if ( this.playerData.peppers - value / conversionFactor > 0) {
      this.playerData.gold = this.playerData.gold + value;
      this.playerData.peppers = this.playerData.peppers - value / conversionFactor;

      this.UpdatePlayerProgress();
    }
  }

  UpdateSubscriptions(costPeppers: number) {
    //this.playerData.peppers = this.playerData.peppers - costPeppers;

    this.subscriptionList?.forEach((element) => {
      element.unsubscribe();
    });
    this.subscriptionList = [];
    this.peppersPerSecond = 0;
    this.goldPerSecond = 0;

    // Process all improvements to earn more peppers
    this.processImprovements();

    // Process all selling skills that turn peppers into gold
    this.processSellingSkills();

  }

  private processSellingSkills() {
    this.playerDataRepository.playerData.sellingSkillsList.forEach((element: SellingSkill, index: number, array: SellingSkill[]) => {
      if (element.count > 0) {
        let subscription: Subscription;

        this.everySecond = timer(0, 1000 / (element.conversionFactor * element.count));

        subscription = this.everySecond.subscribe((seconds) => {
          this.GoldHarvest(1, element.conversionFactor);
        });

        this.goldPerSecond =
          this.goldPerSecond + element.conversionFactor * element.count;

        this.subscriptionList?.push(subscription);
      }
    });
  }

  private processImprovements() {
    this.playerDataRepository.playerData.improvementList.forEach((element: { count: number; increase: number; }) => {
      if (element.count > 0) {
        let subscription: Subscription;

        this.everySecond = timer(0, 1000 / (element.increase * element.count));

        subscription = this.everySecond.subscribe((seconds) => {
          this.ClickHarvest(1);
          this.UpdatePlayerProgress();

        });

        this.peppersPerSecond =
          this.peppersPerSecond + element.increase * element.count;

        this.subscriptionList?.push(subscription);
      }
    });
  }

  ClickHarvest(value:number) {
    this.playerData.peppers = this.playerData.peppers + value;
  }


  UpdatePlayerProgress():void {
    if (this.playerData.peppers >= 500) {
      this.playerData.specialsUnlocked = true;

    }
  }
}

