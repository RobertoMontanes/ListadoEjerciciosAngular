import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-page.html',
  styleUrl: './register-form-page.css',
})
export class RegisterFormPage {
  loginFormGroup = new FormGroup({
    nombreFormControl: new FormControl(''),
    apellidosFormControl: new FormControl(''),
    nifFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    telefonoFormControl: new FormControl(''),
    sexoFormControl: new FormControl(''),
    paginaEncontradaFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
    confirmPasswordFormControl: new FormControl(''),
  });


  onLoginClicked() {
  console.log('** Form group value **');
  console.log('Form Value:', this.loginFormGroup.value);
  
}

  clearForm() {
    this.loginFormGroup.reset();
  }

}
