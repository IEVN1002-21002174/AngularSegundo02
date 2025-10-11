export class zodiaco {
  nom!: string;
  ap!: string;
  am!: string;
  dia!: number;
  mes!: number;
  year!: number;
  edad!: number;
  signo!: string;
  imagen!: string;
  calcula!: number

  calcular(): void {
    this.calcularEdad();
    this.calcularSignoChino();
  }

  calcularEdad(): void {
    const anioActual = 2025;
    const mesActual = 10;
    const diaActual = 11;

    if(this.year <= anioActual) {
      this.calcula = anioActual - this.year;
    }
    else if (mesActual < this.mes && mesActual < 12) {
      this.calcula--;
    }
    else if (mesActual === this.mes && diaActual < this.dia && diaActual < 31) {
      this.calcula--;
    }
    else{
      this.calcula = 0;
    }

    this.edad = this.calcula;
  }

  calcularSignoChino(): void {
    const aniosSignos = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
      'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];

    const imagenesSignos = [
      'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/RATA_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-BUEY_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-TIGRE_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-CONEJO_PFC.svg',
      'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-DRAGON_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/LA-SERPIENTE_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-CABALLO_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/LA-CABRA_PFC.svg',
      'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-MONO_PFC.svg', '', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-GALLO_PFC.svg', 'https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-CERDO_PFC.svg'
    ];

    const indice = (this.year - 1924) % 12;

    this.signo = aniosSignos[indice];
    this.imagen = imagenesSignos[indice];
  }
}
