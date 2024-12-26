import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import FireBallSpell from '../../shared/classes/spells/FireBallSpell';
import { PlayerService } from '../../shared/services/player/player.service';
import HealSpell from '../../shared/classes/spells/HealSpell';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import ISpell from '../../shared/classes/spells/ISpell';
import { AudioService } from '../../shared/services/audio/audio.service';
import AUDIO_PATHS from '../../shared/services/audio/audio-paths';
import { SpellPopoverDirective } from '../../shared/directives/spell-popover.directive';
import { ItemPopoverDirective } from '../../shared/directives/item-popover.directive';

@Component({
  selector: 'app-spells-menu',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, NgIf, SpellPopoverDirective],
  templateUrl: './spells-menu.component.html',
  styleUrl: './spells-menu.component.scss',
})
export class SpellsMenuComponent {
  menuService: MenuService;
  attackSpells = [new FireBallSpell()];
  healSpells = [new HealSpell()];

  @ViewChild('spellsMenu') spellsMenuElement: ElementRef | null = null;

  constructor(
    menuService: MenuService,
    private playerService: PlayerService,
    private audioService: AudioService,
  ) {
    this.menuService = menuService;
  }

  disableSpellActivation(spell: ISpell) {
    const alreadyHasSpell = this.playerService.getSpells().some(playerSpell => playerSpell.key === spell.key);
    const doNotHaveLevel = this.playerService.level < this.playerService.getSpells().length;
    return alreadyHasSpell || doNotHaveLevel;
  }

  activeSpell(newSpell: ISpell) {
    this.playerService.addSpell(newSpell);

    const spellContainer = this.spellsMenuElement?.nativeElement.querySelector(`#${newSpell.key}`);
    spellContainer.classList.add('active-spell');
    this.audioService.playAudio(AUDIO_PATHS.SPELL_UP, 0.5);
  }

  playHoverSound() {
    this.audioService.playAudio(AUDIO_PATHS.HOVER, 0.5);
  }
}
