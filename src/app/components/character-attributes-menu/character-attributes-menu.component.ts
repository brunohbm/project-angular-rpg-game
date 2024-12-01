import { Component, effect } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import { AudioService } from '../../shared/services/audio/audio.service';
import openMenuAudio from '../../assets/audio/open-menu.mp3';

@Component({
  selector: 'app-character-attributes-menu',
  standalone: true,
  imports: [],
  templateUrl: './character-attributes-menu.component.html',
  styleUrl: './character-attributes-menu.component.scss',
})
export class CharacterAttributesMenuComponent {
  menuService: MenuService;

  constructor(menuService: MenuService, private audioService: AudioService) {
    this.menuService = menuService;

    effect(() => {
      this.handleMenuToggleChange();
    });
  }

  handleMenuToggleChange() {
    if (this.menuService.isCharacterMenuOpen) {
      this.audioService.playAudio(openMenuAudio);
    }
  }
}
