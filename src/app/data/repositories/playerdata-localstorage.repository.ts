import { Observable, of, Subscription, timer } from "rxjs";
import { Improvement } from "src/app/core/models/improvement.model";
import { PlayerData } from "src/app/core/models/playerdata.model";
import { Special } from "src/app/core/models/special.model";
import { PlayerDataRepository } from "src/app/core/repositories/playerdata.repository";

export class PlayerDataLocalStorageRepository extends PlayerDataRepository {

  public everyFiveMinutes: Observable<number> = timer(0, 5000);

  constructor() {
  super();

  let subscription = this.everyFiveMinutes.subscribe((seconds) => {
    this.Save();
    console.log("Saved!")

  })



 }

  public peppers: number = -1;

  public Save(): void {
    localStorage.setItem("peppers", this.peppers.toString());
  }

  public Load(): void {
    this.peppers = Number(localStorage.getItem("peppers"));
  }

  public Reset(): void {
    this.peppers = 0;
  }
}
