import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path: 'table',
                loadComponent: () => import('./business/table/table.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]    
    },
    { //Control de error si la ruta no existiese.
        path: '**',
        redirectTo: 'dashboard'
    }
];
