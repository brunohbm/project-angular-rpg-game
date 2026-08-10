import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { PlayerService } from '../../shared/services/player/player.service';
import { MenuService } from '../../shared/services/menu/menu.service';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  playerService: PlayerService;
  theme: string = 'light';

  constructor(playerService: PlayerService, private menuService: MenuService, private themeService: ThemeService) {
    this.playerService = playerService;
    this.theme = this.themeService.get();
    this.themeService.theme$.subscribe((t) => (this.theme = t));
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

  toggleTheme() {
    this.themeService.toggle();
  }

}
