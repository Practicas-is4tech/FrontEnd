import { Routes } from '@angular/router';
import { Cambio30sComponent } from '../components/cambio30s/cambio30s.component';
import { Input1Component } from '../components/input-1/input-1.component';

export const routes: Routes = [
    {
        path: 'cambio30s', component: Cambio30sComponent
    },
    {
        path: 'input1', component: Input1Component
    }
];
