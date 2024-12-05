import { PlayerService } from '../../services/player/player.service';
import IMob from '../mobs/IMob';
import ISpell, { SpellType } from './ISpell';

export default class HealSpell implements ISpell {
  key: string = 'HEAL_SPELL';
  name: string = 'Cura instantânea';
  imageSrc: string = '/assets/images/heal.webp';
  type: SpellType = SpellType.HEAL;
  manaCost: number = 60;
  healthCost: number = 0;
  staminaCost: number = 0;
  effectAmount: number = 30;
  description: string = `Aplica uma cura de ${this.effectAmount} pontos de vida.`;

  checkRequirements(sender: PlayerService): boolean {
    return sender.mana >= this.manaCost;
  }

  cast(sender: PlayerService, target: IMob | PlayerService) {
    sender.decrementMana(this.manaCost);
    target.incrementHealth(this.effectAmount);
  }
}
