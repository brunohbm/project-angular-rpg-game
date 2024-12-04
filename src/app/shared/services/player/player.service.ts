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
    initialStrength: 10,
    initialAgility: 10,
    initialVitality: 10,
    initialEnergy: 10,
    attributePointsPerLevel: 10,
    initialAttributePoints: 10,
  };

  private health$ = signal(this.configuration.maxHealth);
  private mana$ = signal(this.configuration.maxMana);
  private stamina$ = signal(this.configuration.maxStamina);
  private xp$ = signal(0);
  private coins$ = signal(0);
  private level$ = signal(0);
  private strength$ = signal(this.configuration.initialStrength);
  private agility$ = signal(this.configuration.initialAgility);
  private vitality$ = signal(this.configuration.initialVitality);
  private energy$ = signal(this.configuration.initialEnergy);
  private attributePoints$ = signal(this.configuration.initialAttributePoints);

  get config() {
    return { ...this.configuration };
  }
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
  get strength() {
    return this.strength$();
  }
  get agility() {
    return this.agility$();
  }
  get vitality() {
    return this.vitality$();
  }
  get energy() {
    return this.energy$();
  }
  get attributePoints() {
    return this.attributePoints$();
  }

  constructor() {}

  incrementHealth(value: number) {
    this.health$.set(this.health$() + value);
  }

  decrementHealth(value: number) {
    const nextHealth = this.health - value;
    this.health$.set(nextHealth > 0 ? nextHealth : 0);
  }

  incrementMana(value: number) {
    this.mana$.set(this.mana + value);
  }

  decrementMana(value: number) {
    const nextMana = this.mana - value;
    this.mana$.set(nextMana > 0 ? nextMana : 0);
  }

  incrementStamina(value: number) {
    this.stamina$.set(this.stamina + value);
  }

  decrementStamina(value: number) {
    const nextStamina = this.stamina - value;
    this.stamina$.set(nextStamina > 0 ? nextStamina : 0);
  }

  incrementXp(value: number) {
    const newValue = this.xp + value;

    if (newValue >= this.config.maxXp) {
      const amountOfLevels = Math.floor(newValue / this.config.maxXp);
      const nextLevel = this.level + amountOfLevels;
      const nextAttributePoints =
        this.attributePoints +
        this.config.attributePointsPerLevel * amountOfLevels;
      const restXp = newValue - this.config.maxXp * amountOfLevels;

      this.xp$.set(restXp);
      this.level$.set(nextLevel);
      this.attributePoints$.set(nextAttributePoints);
      return;
    }

    this.xp$.set(newValue);
  }

  decrementXp(value: number) {
    const nextXp = this.xp - value;
    this.xp$.set(nextXp > 0 ? nextXp : 0);
  }

  incrementCoins(value: number) {
    this.coins$.set(this.coins + value);
  }

  decrementCoins(value: number) {
    this.coins$.set(this.coins - value);
  }

  incrementStrength() {
    if (this.attributePoints > 0) {
      this.strength$.set(this.strength + 1);
      this.attributePoints$.set(this.attributePoints - 1);
    }
  }

  incrementAgility() {
    if (this.attributePoints > 0) {
      this.agility$.set(this.agility + 1);
      this.attributePoints$.set(this.attributePoints - 1);
    }
  }

  incrementVitality() {
    if (this.attributePoints > 0) {
      this.vitality$.set(this.vitality + 1);
      this.attributePoints$.set(this.attributePoints - 1);
    }
  }

  incrementEnergy() {
    if (this.attributePoints > 0) {
      this.energy$.set(this.energy + 1);
      this.attributePoints$.set(this.attributePoints - 1);
    }
  } 

  receiveAttack(strength: number) {
    this.decrementHealth(strength);
  }
}
