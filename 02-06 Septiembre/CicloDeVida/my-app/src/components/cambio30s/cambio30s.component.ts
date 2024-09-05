import { Component, OnDestroy } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cambio30s',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cambio30s.component.html',
  styleUrl: './cambio30s.component.scss'
})
export class Cambio30sComponent implements OnDestroy {
  valorInicial: string = '';
  valorActualizado: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.valorActualizado = this.valorInicial + ' HOLA';
    }, 30000);
  }

  ngOnDestroy() {
    console.log('Componente destruido');
  }
}
