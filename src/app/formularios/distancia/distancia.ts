export class distancia {
  X1!: number
  X2!: number
  Y1!: number
  Y2!: number
  res!: number;

  calcular():void{
    const dfx = this.X2 - this.X1;
    const dfy = this.Y2 - this.Y1;
    const result = ((dfx**2) + (dfy**2));
    this.res = result ** 0.5;
  }


}

