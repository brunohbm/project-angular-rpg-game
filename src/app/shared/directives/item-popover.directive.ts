import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import IItem from '../classes/items/IItem';

@Directive({
  selector: '[appItemPopover]',
  standalone: true,
})
export class ItemPopoverDirective implements OnInit {
  @Input({ required: true }) item!: IItem;
  popoverContainer!: HTMLDivElement;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.popoverContainer = this.renderer.createElement('div');
    this.popoverContainer.classList.add('popover-container');
    this.popoverContainer.style.display = 'none';

    const titleDiv = this.renderer.createElement('div');
    titleDiv.classList.add('item-popover-title');
    const nameText = this.renderer.createText(this.item.name);
    this.renderer.appendChild(titleDiv, nameText);
    this.renderer.appendChild(this.popoverContainer, titleDiv);

    const descriptionDiv = this.renderer.createElement('div');
    descriptionDiv.classList.add('item-popover-description');
    const descriptionText = this.renderer.createText(this.item.description);
    this.renderer.appendChild(descriptionDiv, descriptionText);
    this.renderer.appendChild(this.popoverContainer, descriptionDiv);

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
