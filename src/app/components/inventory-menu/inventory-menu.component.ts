import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import IItem, { ItemTypeEnum } from '../../shared/classes/items/IItem';
import ArmorItem from '../../shared/classes/items/ArmorItem';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { PlayerService } from '../../shared/services/player/player.service';
import { ItemPopoverDirective } from '../../shared/directives/item-popover.directive';
import CapeItem from '../../shared/classes/items/CapeItem';

@Component({
  selector: 'app-inventory-menu',
  standalone: true,
  imports: [NgFor, ItemPopoverDirective, NgTemplateOutlet, NgIf],
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
    console.log(playerService.equippedItems)
    this.menuService = menuService;

    playerService.addItemToInventory(new ArmorItem());
    playerService.addItemToInventory(new CapeItem());
    this.playerService = playerService;
  }

  equipItem(item: IItem) {
    this.playerService.equipItem(item);
  }

  unequipItem(item: IItem) {
    this.playerService.unequipItem(item);
  }
}
