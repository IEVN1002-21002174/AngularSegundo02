import { Routes } from "@angular/router";

export default[{
  path:'distancia',
  loadComponent:()=>import('./distancia/distancia.component').then(f=>f.DistanciaComponent)
},
{
  path:'multiplicacion',
  loadComponent:()=>import('./multiplicacion/multiplicacion.component').then(f=>f.MultiplicacionComponent)
},
{
  path:'zodiaco',
  loadComponent:()=>import('./zodiaco/zodiaco.component').then(f=>f.ZodiacoComponent)
},
] as Routes
