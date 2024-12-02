import { Component } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';

@Component({
  selector: 'app-skills-menu',
  standalone: true,
  imports: [],
  templateUrl: './skills-menu.component.html',
  styleUrl: './skills-menu.component.scss'
})
export class SkillsMenuComponent {
  menuService: MenuService;

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

}
