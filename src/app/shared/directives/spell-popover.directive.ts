import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import ISpell from '../classes/spells/ISpell';

@Directive({
  selector: '[appSpellPopover]',
  standalone: true,
  host: {
    '[class.spell-popover]': 'true',
  },
})
export class SpellPopoverDirective implements OnInit {
  @Input({ required: true }) spell!: ISpell;
  popoverContainer!: HTMLDivElement;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.popoverContainer = this.renderer.createElement('div');
    this.popoverContainer.classList.add('popover-container');
    this.popoverContainer.style.display = 'none';

    const titleDiv = this.renderer.createElement('div');
    titleDiv.classList.add('spell-popover-title');
    const nameText = this.renderer.createText(this.spell.name);
    this.renderer.appendChild(titleDiv, nameText);
    this.renderer.appendChild(this.popoverContainer, titleDiv);

    const descriptionDiv = this.renderer.createElement('div');
    descriptionDiv.classList.add('spell-popover-description');
    const descriptionText = this.renderer.createText(this.spell.description);
    this.renderer.appendChild(descriptionDiv, descriptionText);
    this.renderer.appendChild(this.popoverContainer, descriptionDiv);

    const typeDiv = this.renderer.createElement('div');
    typeDiv.classList.add('spell-popover-type');
    const typeText = this.renderer.createText(`Tipo: ${this.spell.type}`);
    this.renderer.appendChild(typeDiv, typeText);
    this.renderer.appendChild(this.popoverContainer, typeDiv);

    if (this.spell.manaCost) {
      const manaCostDiv = this.renderer.createElement('div');
      manaCostDiv.classList.add('spell-popover-cost-description');
      const manaCostText = this.renderer.createText(
        `Custo de mana: ${this.spell.manaCost}`
      );
      this.renderer.appendChild(manaCostDiv, manaCostText);
      this.renderer.appendChild(this.popoverContainer, manaCostDiv);
    }

    if (this.spell.healthCost) {
      const healthCostDiv = this.renderer.createElement('div');
      healthCostDiv.classList.add('spell-popover-cost-description');
      const healthCostText = this.renderer.createText(
        `Custo de vida: ${this.spell.healthCost}`
      );
      this.renderer.appendChild(healthCostDiv, healthCostText);
    }

    if (this.spell.staminaCost) {
      const staminaCostDiv = this.renderer.createElement('div');
      staminaCostDiv.classList.add('spell-popover-cost-description');
      const staminaCostText = this.renderer.createText(
        `Custo de Stamina: ${this.spell.staminaCost}`
      );
      this.renderer.appendChild(staminaCostDiv, staminaCostText);
    }

    const effectAmountDiv = this.renderer.createElement('div');
    effectAmountDiv.classList.add('spell-popover-effect-amount');
    const effectAmountText = this.renderer.createText(
      `Efeito: ${this.spell.effectAmount}`
    );
    this.renderer.appendChild(effectAmountDiv, effectAmountText);

    this.renderer.appendChild(this.element.nativeElement, this.popoverContainer);
  }

  @HostListener('mouseover', ['$event']) onMouseOver(event: Event) {
    event.preventDefault();
    this.popoverContainer.style.display = 'block';
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event: Event) {
    event.preventDefault();
    this.popoverContainer.style.display = 'none';
  }
}
