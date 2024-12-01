import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isCharacterMenuOpen$ = signal(false);

  get isCharacterMenuOpen() {
    return this.isCharacterMenuOpen$();
  }

  constructor() { }

  toogleCharacterMenu() {
    this.isCharacterMenuOpen$.set(!this.isCharacterMenuOpen);
  }
}
