import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterAttributesMenuComponent } from './components/character-attributes-menu/character-attributes-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,    
    FooterComponent,
    CharacterAttributesMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rpg-game';
}
