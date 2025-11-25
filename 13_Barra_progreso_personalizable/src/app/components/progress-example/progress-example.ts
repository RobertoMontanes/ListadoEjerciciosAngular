import { Component } from '@angular/core';
import { CustomProgressBarComponent } from '../custom-progress-bar/custom-progress-bar';

@Component({
  selector: 'app-progress-example',
  standalone: true,
  imports: [CustomProgressBarComponent],
  templateUrl: './progress-example.html',
  styleUrl: './progress-example.css',
})
export class ProgressExample {
  progresoDescarga: number = 75;
  progresoCarga: number = 40;
  progresoMemoria: number = 90;
}
