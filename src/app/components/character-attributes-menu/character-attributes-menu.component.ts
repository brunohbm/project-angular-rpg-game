import { Component, effect } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import { AudioService } from '../../shared/services/audio/audio.service';
import { PlayerService } from '../../shared/services/player/player.service';

@Component({
  selector: 'app-character-attributes-menu',
  standalone: true,
  imports: [],
  templateUrl: './character-attributes-menu.component.html',
  styleUrl: './character-attributes-menu.component.scss',
})
export class CharacterAttributesMenuComponent {
  menuService: MenuService;
  playerService: PlayerService;

  constructor(menuService: MenuService, playerService: PlayerService) {
    this.menuService = menuService;
    this.playerService = playerService;
  }

}
