import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterAttributesMenuComponent } from './components/character-attributes-menu/character-attributes-menu.component';
import { SkillsMenuComponent } from './components/skills-menu/skills-menu.component';
import { InventoryMenuComponent } from './components/inventory-menu/inventory-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,    
    FooterComponent,
    CharacterAttributesMenuComponent,
    SkillsMenuComponent,
    InventoryMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rpg-game';
}
