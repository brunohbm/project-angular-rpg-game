import { PlayerService } from '../../services/player/player.service';
import ISpell, { SpellType } from './ISpell';
import IMob from '../mobs/IMob';

export default class FireBallSpell implements ISpell {
  key: string = 'FIRE_BALL';
  name: string = 'Bola de fogo';
  description: string = 'Lança uma bola de fogo contra o inimigo ou aliado';
  type: SpellType = SpellType.ATTACK;
  manaCost: number = 30;
  healthCost: number = 0;
  staminaCost: number = 0;
  effectAmount: number = 10;

  checkRequirements(sender: PlayerService): boolean {
    return sender.mana >= this.manaCost;
  }

  cast(sender: PlayerService, target: IMob) {
    target.receiveAttack(this.effectAmount);
    sender.decrementMana(this.manaCost);
  }
}
