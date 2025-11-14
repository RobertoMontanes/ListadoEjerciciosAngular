import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-student-new-page',
  imports: [ReactiveFormsModule],
  templateUrl: './student-new-page.html',
  styleUrl: './student-new-page.css',
})
export class StudentNewPage {
  profileForm = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{8}[A-Z]$|^[XYZ][0-9]{7}[A-Z]$/)
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{8}[A-Z]$|^[XYZ][0-9]{7}[A-Z]$/)
    ]),
    curso: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]),
  });
  onSubmit() {
    console.log('Formulario válido', this.profileForm.value);
  }

}


