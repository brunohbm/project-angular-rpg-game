import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { PlayerService } from '../../shared/services/player.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }
}
