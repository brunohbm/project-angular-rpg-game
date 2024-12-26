import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import IItem from '../../shared/classes/items/IItem';
import ArmorItem from '../../shared/classes/items/ArmorITem';
import { NgFor } from '@angular/common';
import { PlayerService } from '../../shared/services/player/player.service';
import { ItemPopoverDirective } from '../../shared/directives/item-popover.directive';

@Component({
  selector: 'app-inventory-menu',
  standalone: true,
  imports: [NgFor, ItemPopoverDirective],
  templateUrl: './inventory-menu.component.html',
  styleUrl: './inventory-menu.component.scss',
})
export class InventoryMenuComponent {
  menuService: MenuService;
  playerService: PlayerService;

  @ViewChild('itemsContainer') itemsContainer!: ElementRef;  

  get widthPerSlot() {
    if(! this.itemsContainer) return 0;
    return this.itemsContainer.nativeElement.clientWidth / 20;
  }

  constructor(menuService: MenuService, playerService: PlayerService) {
    this.menuService = menuService;

    playerService.addItemToInventory(new ArmorItem());
    this.playerService = playerService;
  }

  equipItem(item: IItem) {
    console.warn(item, this.itemsContainer.nativeElement.clientWidth);
  }
}
