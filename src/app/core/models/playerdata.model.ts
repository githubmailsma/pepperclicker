import { Improvement } from "./improvement.model";
import { SellingSkill } from "./selling-skills.model";
import { Special } from "./special.model";

export class PlayerData {
  public cheatsEnabled: boolean = false;
  public peppers: number = -1;
  public gold: number = -1;
  public tickets: number = -1;
  public specialsUnlocked: boolean = false;

  public improvementList: Improvement[] = [];
  public specialsList: Special[] = [];
  public sellingSkillsList: SellingSkill[] = [];
}
