import { Observable } from "rxjs";
import { PlayerData } from "../models/playerdata.model";

export abstract class PlayerDataRepository {

  abstract playerData: PlayerData;
  abstract improvementListDefaults: any;
  abstract specialsListDefaults: any;

  abstract Save(): void;
  abstract Load(): void;
  abstract Reset(): void;
  abstract Init(improvementListDefaults:any, specialsListDefaults: any, sellingSkillsListDefaults: any): void;

}
