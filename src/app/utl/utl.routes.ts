import { Routes } from "@angular/router";

export default[{
  path:'listaalumnos',
  loadComponent:()=>import('./alumnos/alumnos.component').then(u=>u.AlumnosComponent)
},
{
  path:'agregar',
  loadComponent:()=>import('./agregar/agregar.component').then(u=>u.AgregarComponent)
},
{
  path:'eliminar/:matricula',
  loadComponent:()=>import('./eliminar/eliminar.component').then(u=>u.EliminarComponent)
},
{
  path:'editar/:matricula',
  loadComponent:()=>import('./editar/editar.component').then(u=>u.EditarComponent)
},
] as Routes
