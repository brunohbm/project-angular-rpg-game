import { Component } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';

@Component({
  selector: 'app-inventory-menu',
  standalone: true,
  imports: [],
  templateUrl: './inventory-menu.component.html',
  styleUrl: './inventory-menu.component.scss',
})
export class InventoryMenuComponent {
  menuService: MenuService;

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }
}
