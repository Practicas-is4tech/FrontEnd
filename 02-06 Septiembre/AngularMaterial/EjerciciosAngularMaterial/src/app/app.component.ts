import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatapickersComponent } from './components/datapickers/datapickers.component';
import { Datapickers2Component } from './components/datapickers2/datapickers2.component';
import { Datapickers3Component } from './components/datapickers3/datapickers3.component';
import { Datapickers4Component } from './components/datapickers4/datapickers4.component';
import { ButtonFABComponent } from './components/button-fab/button-fab.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DatapickersComponent,
    Datapickers2Component,
    Datapickers3Component,
    Datapickers4Component,
    MatMenuModule,
    MatButtonModule,
    ButtonFABComponent,
    TableListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EjerciciosAngularMaterial';
}
