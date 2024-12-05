import { Component } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import FireBallSpell from '../../shared/classes/spells/FireBallSpell';
import { PlayerService } from '../../shared/services/player/player.service';
import HealSpell from '../../shared/classes/spells/HealSpell';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills-menu.component.html',
  styleUrl: './skills-menu.component.scss'
})
export class SkillsMenuComponent {
  menuService: MenuService;
  attackSkills = [
    new FireBallSpell(),
  ];
  healSkills = [
    new HealSpell(),
  ]

  constructor(menuService: MenuService, playerService: PlayerService) {
    this.menuService = menuService;
  }

}
