import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { PlayerService } from '../../shared/services/player/player.service';
import { MenuService } from '../../shared/services/menu/menu.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  playerService: PlayerService;

  constructor(playerService: PlayerService, private menuService: MenuService) {
    this.playerService = playerService;
  }

  openCharacterMenu() {
    this.menuService.toggleCharacterMenu();
  }

  openSkillsMenu() {
    this.menuService.toggleSkillsMenu();
  }

  openInventoryMenu() {
    this.menuService.toggleInventoryMenu();
  }

}
