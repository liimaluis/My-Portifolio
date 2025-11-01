import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

import { MatToolbar } from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

import { MatIcon } from '@angular/material/icon';

import { ApresentacaoComponent } from './components/sections/apresentacao/apresentacao.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SobreComponent } from './components/sections/sobre/sobre.component';
import { ConhecimentosComponent } from './components/sections/conhecimentos/conhecimentos.component';
import { CardsComponent } from './components/sections/cards/cards.component';

// [ApresentacaoComponent,RouterOutlet, MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, MatIcon, MatCardModule],


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, ApresentacaoComponent, SobreComponent, CardsComponent, ConhecimentosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent  {
  
  title = 'portifolio';
  
}
