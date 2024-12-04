import { PlayerService } from "../../services/player/player.service";
import IMob from "../mobs/IMob";

export enum SpellType {
    ATTACK = 'ATTACK',
    HEAL = 'HEAL'
}

export default interface ISpell {
  key: string;
  name: string;
  description: string;
  type: SpellType;
  manaCost: number;
  healthCost: number;
  staminaCost: number;
  effectAmount: number;
  
  checkRequirements(sender: PlayerService): boolean;
  cast(sender:  PlayerService, target: IMob): void;
}
