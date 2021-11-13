import { Observable } from "rxjs";
import { PlayerData } from "../models/playerdata.model";

export abstract class PlayerDataRepository {

  abstract peppers: number;

  abstract Save(): void;
  abstract Load(): void;
  abstract Reset(): void;

}
