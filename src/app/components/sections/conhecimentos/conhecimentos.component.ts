import { Component } from '@angular/core';
import { CATEGORIAS } from '../conhecimentos/conhecimento.data'

@Component({
  selector: 'app-conhecimentos',
  standalone: true,
  imports: [],
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.css'
})
export class ConhecimentosComponent {
 categorias = CATEGORIAS
}
