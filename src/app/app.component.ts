import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

import { MatToolbar } from '@angular/material/toolbar';

import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenav, MatSidenavContainer, MatSidenavContent, MatToolbar, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  title = 'portifolio';

  @ViewChild('sidenav') sidenav!: MatSidenav;
}
