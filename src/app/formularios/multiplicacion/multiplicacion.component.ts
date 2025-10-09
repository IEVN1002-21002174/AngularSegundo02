import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!: FormGroup;
  resultado!: number;
  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      num1: new FormControl(''),
      num2: new FormControl(''),
    })
  }
  multiplicacion(): void {
    let n1 = this.formulario.value.num1;
    let n2 = this.formulario.value.num2;
    this.resultado = n1 * n2;
  }
}
