import { Component } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import IItem from '../../shared/classes/items/IItem';
import ArmorItem from '../../shared/classes/items/ArmorITem';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-inventory-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './inventory-menu.component.html',
  styleUrl: './inventory-menu.component.scss',
})
export class InventoryMenuComponent {
  menuService: MenuService;
  inventoryItems: IItem[] = [
    new ArmorItem(),
  ];

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  equipItem(item: IItem) {
    console.warn(item);
  }
}
