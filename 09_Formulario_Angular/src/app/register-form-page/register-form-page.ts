import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-page.html',
  styleUrl: './register-form-page.css',
})
export class RegisterFormPage {
  loginFormGroup = new FormGroup({
    nombreFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]),
    apellidosFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]),
    nifFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{8}[A-Z]$|^[XYZ][0-9]{7}[A-Z]$/)
    ]),
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    telefonoFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{8}$/)
    ]),
    sexoFormControl: new FormControl('', [
      Validators.required
    ]),
    paginaEncontradaFormControl: new FormControl('', [
      Validators.required
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    ]),
    confirmPasswordFormControl: new FormControl('', [
      Validators.required
    ])
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(control: AbstractControl) {
    const formGroup = control as FormGroup;
    const password = formGroup.get('passwordFormControl')?.value;
    const confirmPassword = formGroup.get('confirmPasswordFormControl')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  getNombreErrors(): string {
    const control = this.loginFormGroup.get('nombreFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'El nombre es obligatorio';
      if (control.errors['minlength']) return 'Mínimo 2 caracteres';
      if (control.errors['maxlength']) return 'Máximo 50 caracteres';
      if (control.errors['pattern']) return 'Solo se permiten letras y espacios';
    }
    return '';
  }

  getApellidosErrors(): string {
    const control = this.loginFormGroup.get('apellidosFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Los apellidos son obligatorios';
      if (control.errors['minlength']) return 'Mínimo 2 caracteres';
      if (control.errors['maxlength']) return 'Máximo 100 caracteres';
      if (control.errors['pattern']) return 'Solo se permiten letras y espacios';
    }
    return '';
  }

  getNifErrors(): string {
    const control = this.loginFormGroup.get('nifFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'El NIF es obligatorio';
      if (control.errors['pattern']) return 'Formato de NIF inválido';
    }
    return '';
  }

  getEmailErrors(): string {
    const control = this.loginFormGroup.get('emailFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'El email es obligatorio';
      if (control.errors['email'] || control.errors['pattern']) return 'Email inválido';
    }
    return '';
  }

  getTelefonoErrors(): string {
    const control = this.loginFormGroup.get('telefonoFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'El teléfono es obligatorio';
      if (control.errors['pattern']) return 'Teléfono español inválido (9 dígitos)';
    }
    return '';
  }

  getPasswordErrors(): string {
    const control = this.loginFormGroup.get('passwordFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'La contraseña es obligatoria';
      if (control.errors['minlength']) return 'Mínimo 8 caracteres';
      if (control.errors['pattern']) return 'Debe contener mayúsculas, minúsculas, números y símbolos';
    }
    return '';
  }

  getConfirmPasswordErrors(): string {
    const control = this.loginFormGroup.get('confirmPasswordFormControl');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Confirma tu contraseña';
    }
    if (this.loginFormGroup.errors?.['passwordMismatch'] && 
        this.loginFormGroup.get('confirmPasswordFormControl')?.touched) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  }

  onSubmit() {
    if (this.loginFormGroup.valid) {
      console.log('Formulario válido', this.loginFormGroup.value);
    } else {
      Object.keys(this.loginFormGroup.controls).forEach(key => {
        const control = this.loginFormGroup.get(key);
        control?.markAsTouched();
      });
    }
  }

  onLoginClicked() {
    console.log('** Form group value **');
    console.log('Form Value:', this.loginFormGroup.value);
    console.log('Form Valid:', this.loginFormGroup.valid);
    console.log('Form Errors:', this.loginFormGroup.errors);
  }

  clearForm() {
    this.loginFormGroup.reset();
  }
}