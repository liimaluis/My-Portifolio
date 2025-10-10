import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

import { MatToolbar } from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, MatIcon, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements AfterViewInit {
  
  title = 'portifolio';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.typeEffect();
  }

  typeEffect() {
    const element = document.getElementById('cargo');
    if (!element) return;

    const text = 'Desenvolvedor Full Stack';
    let index = 0;

    const typing = () => {
      if (index < text.length) {
        element.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typing, 100);
      } else {
        element.classList.add('typewriter');
      }
    };

    typing();
  }
  
}
