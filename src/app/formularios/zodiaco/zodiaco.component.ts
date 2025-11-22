import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  cal = new zodiaco();

  nombreCompleto: string = '';
  edad: number = 0;
  signoZodiacal: string = '';
  imagenSigno: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nom: new FormControl(''),
      ap: new FormControl(''),
      am: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      year: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  procesar(): void {
    this.cal.nom = this.formulario.value.nom;
    this.cal.ap = this.formulario.value.ap;
    this.cal.am = this.formulario.value.am;
    this.cal.dia = parseInt(this.formulario.value.dia);
    this.cal.mes = parseInt(this.formulario.value.mes);
    this.cal.year = parseInt(this.formulario.value.year);

    this.cal.calcular();

    this.nombreCompleto = `${this.cal.nom} ${this.cal.ap} ${this.cal.am}`;
    this.edad = this.cal.edad;
    this.signoZodiacal = this.cal.signo;
    this.imagenSigno = this.cal.imagen;
  }
}
