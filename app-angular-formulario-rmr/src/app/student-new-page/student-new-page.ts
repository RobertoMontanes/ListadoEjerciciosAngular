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
      
    ]),
    edad: new FormControl('', [
      Validators.required,
    ]),
    telefono: new FormControl('', [
      Validators.required,
    ]),
    curso: new FormControl('',[
      Validators.required,
      
    ]),
  });
  onSubmit() {
    console.log('Formulario válido', this.profileForm.value);
  }

}


