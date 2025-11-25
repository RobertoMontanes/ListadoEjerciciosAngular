import { Routes } from '@angular/router';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar';


export const routes: Routes = [
    {path:"", component: CustomProgressBarComponent, pathMatch:"full"}
];
