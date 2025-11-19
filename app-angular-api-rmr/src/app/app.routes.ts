import { Routes } from '@angular/router';
import { VehiclesListPage } from './vehicles-list-page/vehicles-list-page';
import { VehiclesDetailPage } from './vehicles-detail-page/vehicles-detail-page';

export const routes: Routes = [
  { path: 'vehicles', component: VehiclesListPage },
  { path: 'vehicles/:id', component: VehiclesDetailPage },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: '**', redirectTo: '/vehicles' }
];