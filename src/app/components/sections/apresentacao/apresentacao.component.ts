import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.css'
})
export class ApresentacaoComponent implements AfterViewInit{

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
