import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatapickersComponent } from './components/datapickers/datapickers.component';
import { Datapickers2Component } from './components/datapickers2/datapickers2.component';
import { Datapickers3Component } from './components/datapickers3/datapickers3.component';
import { Datapickers4Component } from './components/datapickers4/datapickers4.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DatapickersComponent,
    Datapickers2Component,
    Datapickers3Component,
    Datapickers4Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EjerciciosAngularMaterial';
}
