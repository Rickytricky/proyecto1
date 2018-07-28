import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { ProductosagregarComponent } from './productosagregar/productosagregar.component';
import { DefaultComponent } from './default/default.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'productos', component: ProductosComponent,
    children: [
      { path: 'producto-agregar', component: ProductosagregarComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
