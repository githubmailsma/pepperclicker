import { Observable } from "rxjs";
import { Improvement } from "../models/improvement.model";
import { Special } from "../models/special.model";

export abstract class GameDataRepository {
  abstract getAllImprovements(): Observable<Improvement[]>;
  abstract getAllSpecials(): Observable<Special[]>;


}
