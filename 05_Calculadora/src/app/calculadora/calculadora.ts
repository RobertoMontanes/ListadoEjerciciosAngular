import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.css']
})
export class CalculadoraComponent {
  // Interpolation
  display = '0';
  
  // Property binding
  isResultDisplayed = false;

  // Variables internas
  private currentOperand = 0;
  private previousOperand = 0;
  private operation = '';
  private waitingForNewOperand = false;

  // Event binding para números
  onNumberClick(num: number) {
    if (this.isResultDisplayed || this.display === '0' || this.waitingForNewOperand) {
      this.display = num.toString();
      this.isResultDisplayed = false;
      this.waitingForNewOperand = false;
    } else {
      this.display += num.toString();
    }
    this.currentOperand = parseFloat(this.display);
  }

  // Event binding para operaciones
  onOperationClick(op: string) {
    if (this.operation && !this.waitingForNewOperand) {
      this.calculate();
    }
    this.operation = op;
    this.previousOperand = this.currentOperand;
    this.waitingForNewOperand = true;
  }

  // Event binding para igual
  onEqualClick() {
    if (this.operation) {
      this.calculate();
      this.operation = '';
      this.isResultDisplayed = true;
      this.waitingForNewOperand = true;
    }
  }

  private calculate() {
    switch (this.operation) {
      case '+':
        this.currentOperand = this.previousOperand + this.currentOperand;
        break;
      case '-':
        this.currentOperand = this.previousOperand - this.currentOperand;
        break;
    }
    this.display = this.currentOperand.toString();
  }
}