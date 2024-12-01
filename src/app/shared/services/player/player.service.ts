import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  readonly configuration = {
    maxHealth: 100,
    maxMana: 100,
    maxStamina: 100,
    maxXp: 100,
  };

  private health$ = signal(this.configuration.maxHealth);
  private mana$ = signal(this.configuration.maxMana);
  private stamina$ = signal(this.configuration.maxStamina);
  private xp$ = signal(0);
  private coins$ = signal(0);
  private level$ = signal(0);

  get health() {
    return this.health$();
  }
  get mana() {
    return this.mana$();
  }
  get stamina() {
    return this.stamina$();
  }
  get xp() {
    return this.xp$();
  }
  get coins() {
    return this.coins$();
  }
  get level() {
    return this.level$();
  }
  get config() {
    return { ...this.configuration };
  }

  constructor() {}

  incrementHealth(value: number) {
    this.health$.set(this.health$() + value);
  }

  decrementHealth(value: number) {
    this.health$.set(this.health - value);
  }

  incrementMana(value: number) {
    this.mana$.set(this.mana + value);
  }

  decrementMana(value: number) {
    this.mana$.set(this.mana - value);
  }

  incrementStamina(value: number) {
    this.stamina$.set(this.stamina + value);
  }

  decrementStamina(value: number) {
    this.stamina$.set(this.stamina - value);
  }

  incrementXp(value: number) {
    const newValue = this.xp + value;

    if (newValue >= this.config.maxXp) {
      this.level$.set(this.level + 1);
      this.xp$.set(newValue - this.config.maxXp);
      return;
    }

    this.xp$.set(newValue);
  }

  decrementXp(value: number) {
    this.xp$.set(this.xp - value);
  }

  incrementCoins(value: number) {
    this.coins$.set(this.coins + value);
  }

  decrementCoins(value: number) {
    this.coins$.set(this.coins - value);
  }
}
