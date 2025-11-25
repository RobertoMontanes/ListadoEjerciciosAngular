import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-progress-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-progress-bar.html'
})
export class CustomProgressBarComponent {
  @Input() value: number = 50;
  @Input() color: string = 'primary';
  @Input() striped: boolean = false;
  @Input() showText: boolean = true;

  cambiarValor(cantidad: number) {
    this.value += cantidad;
    
    if (this.value < 0) this.value = 0;
    if (this.value > 100) this.value = 100;
  }

  cambiarColor(nuevoColor: string) {
    this.color = nuevoColor;
  }

  resetear() {
    this.value = 50;
    this.color = 'primary';
    this.striped = false;
    this.showText = true;
  }
}