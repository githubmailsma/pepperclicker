export class SellingSkill {
  constructor(
    public name:string, // name of the skill
    public value: number, // value of the skill in peppers
    public count: number, // amount of this skill in possession
    public unlocked:boolean, // skill visible/unlocked?
    public description:string,
    public conversionFactor:number // At which rate converts this skill peppers to gold
    )

    {}
}
