import { Routes } from '@angular/router';
import { Datapickers2Component } from './components/datapickers2/datapickers2.component';
import { DatapickersComponent } from './components/datapickers/datapickers.component';
import { Datapickers3Component } from './components/datapickers3/datapickers3.component';
import { Datapickers4Component } from './components/datapickers4/datapickers4.component';
import { ButtonFABComponent } from './components/button-fab/button-fab.component';
import { TableListComponent } from './components/table-list/table-list.component';

export const routes: Routes = [
    {
        path: 'datapickers', component: DatapickersComponent,
    },
    {
        path: 'datapickers2', component: Datapickers2Component,
    },
    {
        path: 'datapickers3', component: Datapickers3Component,
    },
    {
        path: 'datapickers4', component: Datapickers4Component,
    },
    {
        path: 'button-fab', component: ButtonFABComponent
    },
    {
        path: 'table-list', component: TableListComponent
    }

];
