import { Injectable, signal } from '@angular/core';
import { AudioService } from '../audio/audio.service';
import AUDIO_PATHS from '../audio/audio-paths';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private isCharacterMenuOpen$ = signal(false);
  private isSkillsMenuOpen$ = signal(false);
  private isInventoryMenuOpen$ = signal(false);

  get isCharacterMenuOpen() {
    return this.isCharacterMenuOpen$();
  }

  get isSkillsMenuOpen() {
    return this.isSkillsMenuOpen$();
  }

  get isInventoryMenuOpen() {
    return this.isInventoryMenuOpen$();
  }

  constructor(private audioService: AudioService) {}

  playMenuSound(openAction: boolean) {
    if (openAction) {
      this.audioService.playAudio(AUDIO_PATHS.OPEN_MENU);
      return;
    }

    this.audioService.playAudio(AUDIO_PATHS.CLOSE_MENU);
  }

  toggleCharacterMenu() {
    const newOpenState = !this.isCharacterMenuOpen;
    this.isCharacterMenuOpen$.set(newOpenState);
    this.isSkillsMenuOpen$.set(false);
    this.isInventoryMenuOpen$.set(false);
    this.playMenuSound(newOpenState);
  }

  toggleSkillsMenu() {
    const newOpenState = !this.isSkillsMenuOpen;
    this.isSkillsMenuOpen$.set(newOpenState);
    this.isInventoryMenuOpen$.set(false);
    this.isCharacterMenuOpen$.set(false);
    this.playMenuSound(newOpenState);
  }

  toggleInventoryMenu() {
    const newOpenState = !this.isInventoryMenuOpen;
    this.isInventoryMenuOpen$.set(newOpenState);
    this.isSkillsMenuOpen$.set(false);
    this.isCharacterMenuOpen$.set(false);
    this.playMenuSound(newOpenState);
  }
}
