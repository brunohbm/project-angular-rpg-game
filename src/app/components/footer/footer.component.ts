import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

// https://dev.to/chintanonweb/angular-state-management-a-comparison-of-the-different-options-available-100e

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
