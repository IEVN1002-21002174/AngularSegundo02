import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
    cal = new distancia();
  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      x2: new FormControl(''),
      y1: new FormControl(''),
      y2: new FormControl(''),
    });
  }
  cDistancia(): void {
    this.cal.X1 = this.formulario.value.x1;
    this.cal.X2 = this.formulario.value.x2;
    this.cal.Y2 = this.formulario.value.y2;
    this.cal.Y1 = this.formulario.value.y1;
    this.cal.calcular();
    this.resultado = this.cal.res;
  }
}
