import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  locations = [
    {
      path: 'lumenhorne',
      left: '11%',
      top: '9%',
    },
    {
      path: 'horne-iceland',
      left: '88%',
      top: '9%',
    }
  ]
}
