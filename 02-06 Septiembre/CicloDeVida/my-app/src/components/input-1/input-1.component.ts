import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Input1Component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-1.component.html',
  styleUrl: './input-1.component.scss'
})
export class Input1Component implements OnDestroy {
  valor1: string = '';

  onChangeInput() {
  }

  ngOnDestroy() {
    console.log('Componente destruido');
  }
}
