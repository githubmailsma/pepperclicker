import { from, Observable, of } from "rxjs";
import { Improvement } from "src/app/core/models/improvement.model";
import { Special } from "src/app/core/models/special.model";
import { GameDataRepository } from "src/app/core/repositories/gamedata.repository";
import gameData from "../../../assets/database.json";

export class GameDataJsonRepository extends GameDataRepository {

  public getAllImprovements(): Observable<Improvement[]> {
    return of(gameData["improvements"]);
  }

  public getAllSpecials(): Observable<Special[]> {
    return of(gameData["specials"]);
  }


}
