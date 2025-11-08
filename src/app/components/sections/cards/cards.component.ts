import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MYPORTIFOLIO } from '../../portifolio.data';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'] // ✅ plural e array
})
export class CardsComponent {
  projetos = MYPORTIFOLIO;
}
