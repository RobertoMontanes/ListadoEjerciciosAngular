import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'; // ← Cambios aquí

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, CommonModule], // ← Quita FormsModule, agrega ReactiveFormsModule
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  profileForm = new FormGroup({
    exampleInputEmail1: new FormControl(''),      
    exampleInputPassword1: new FormControl(''),   
  });

}