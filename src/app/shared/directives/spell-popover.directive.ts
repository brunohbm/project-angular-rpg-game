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

  isOnHover = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const newElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.spell.name);
    this.renderer.appendChild(newElement, text);
    this.renderer.appendChild(this.element.nativeElement, newElement);
  }

  @HostBinding('class.hovering-spell-popover') fileOver: boolean = false;

  @HostListener('mouseover', ['$event']) onMouseOver(event: Event) {
    console.log('mouseOver', this.spell);
    event.preventDefault();
    this.isOnHover = true;
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event: Event) {
    console.log('mouseout');
    event.preventDefault();
    this.isOnHover = false;
  }
}
