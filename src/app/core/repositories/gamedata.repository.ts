import { Observable } from "rxjs";
import { Improvement } from "../models/improvement.model";
import { SellingSkill } from "../models/selling-skills.model";
import { Special } from "../models/special.model";

export abstract class GameDataRepository {
  abstract getAllImprovements(): Observable<Improvement[]>;
  abstract getAllSpecials(): Observable<Special[]>;
  abstract getAllsellingSkills(): Observable<SellingSkill[]>;


}
