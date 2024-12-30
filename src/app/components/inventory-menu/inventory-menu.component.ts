import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../../shared/services/menu/menu.service';
import IItem, { ItemTypeEnum } from '../../shared/classes/items/IItem';
import ArmorItem from '../../shared/classes/items/ArmorItem';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { PlayerService } from '../../shared/services/player/player.service';
import { ItemPopoverDirective } from '../../shared/directives/item-popover.directive';
import CapeItem from '../../shared/classes/items/CapeItem';
import { AudioService } from '../../shared/services/audio/audio.service';
import AUDIO_PATHS from '../../shared/services/audio/audio-paths';
import HamletItem from '../../shared/classes/items/HamletItem';
import RingItem from '../../shared/classes/items/RingItem';
import Ring1Item from '../../shared/classes/items/Ring1Item';
import NecklaceItem from '../../shared/classes/items/NecklaceItem';
import EaringItem from '../../shared/classes/items/EaringItem';
import BeltItem from '../../shared/classes/items/BeltItem';

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
    if (!this.itemsContainer) return 0;
    return this.itemsContainer.nativeElement.clientWidth / 20;
  }

  constructor(
    menuService: MenuService,
    playerService: PlayerService,
    private audioService: AudioService,
  ) {
    console.log(playerService.equippedItems);
    this.menuService = menuService;

    playerService.addItemToInventory(new ArmorItem());
    playerService.addItemToInventory(new CapeItem());
    playerService.addItemToInventory(new HamletItem());
    playerService.addItemToInventory(new RingItem());
    playerService.addItemToInventory(new Ring1Item());
    playerService.addItemToInventory(new NecklaceItem());
    playerService.addItemToInventory(new EaringItem());
    playerService.addItemToInventory(new BeltItem());
    this.playerService = playerService;
  }

  equipItem(item: IItem) {
    this.playerService.equipItem(item);
    this.audioService.playAudio(AUDIO_PATHS.ITEM_EQUIP, 0.5);
  }

  unequipItem(item: IItem) {
    this.playerService.unequipItem(item);
    this.audioService.playAudio(AUDIO_PATHS.ITEM_EQUIP, 0.5);
  }
}
