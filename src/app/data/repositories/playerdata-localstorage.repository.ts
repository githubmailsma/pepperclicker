import { Observable, of, Subscription, timer } from "rxjs";
import { Improvement } from "src/app/core/models/improvement.model";
import { PlayerData } from "src/app/core/models/playerdata.model";
import { Special } from "src/app/core/models/special.model";
import { PlayerDataRepository } from "src/app/core/repositories/playerdata.repository";
import { environment } from "src/environments/environment";

export class PlayerDataLocalStorageRepository extends PlayerDataRepository {

  public playerData: PlayerData = new PlayerData();
  public improvementListDefaults: any;
  public specialsListDefaults: any;
  public sellingSkillsListDefaults: any;


  public everyFiveMinutes: Observable<number> = timer(0, 5000);

  constructor() {
  super();

  let subscription = this.everyFiveMinutes.subscribe((seconds) => {
    this.Save();
    console.log("Saved!")
  })

 }

 public Init(improvementList: any, specialsList: any, sellingSkillsList: any):void {
   this.improvementListDefaults = improvementList;
   this.specialsListDefaults = specialsList;
   this.sellingSkillsListDefaults = sellingSkillsList;

   if (!environment.production) {
    this.playerData.cheatsEnabled = true;
  }
 }

  public Save(): void {
    localStorage.setItem("peppers", this.playerData.peppers.toString());
    localStorage.setItem("specialsUnlocked", String(this.playerData.specialsUnlocked));
    localStorage.setItem("improvementList", JSON.stringify(this.playerData.improvementList))
    localStorage.setItem("specialsList", JSON.stringify(this.playerData.specialsList))
    localStorage.setItem("sellingSkillsList", JSON.stringify(this.playerData.sellingSkillsList))

  }

  public Load(): void {
    this.playerData.peppers = Number(localStorage.getItem("peppers"));
    if (localStorage.getItem("specialsUnlocked") == "false") {
      this.playerData.specialsUnlocked = false;
    } else {
      this.playerData.specialsUnlocked = true;
    }
    this.playerData.improvementList = JSON.parse(String(localStorage.getItem("improvementList")));
    this.playerData.specialsList = JSON.parse(String(localStorage.getItem("specialsList")));
    this.playerData.sellingSkillsList = JSON.parse(String(localStorage.getItem("sellingSkillsList")));
  }

  public Reset(): void {
    this.playerData.peppers = 0;
    this.playerData.gold = 0;
    this.playerData.tickets = 0;
    this.playerData.specialsUnlocked = false;
    this.playerData.improvementList = this.improvementListDefaults;
    this.playerData.specialsList = this.specialsListDefaults;
    this.playerData.sellingSkillsList = this.sellingSkillsListDefaults;
    this.Save();
    this.Load();
  }
}
