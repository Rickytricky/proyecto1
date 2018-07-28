import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productosagregar',
  templateUrl: './productosagregar.component.html',
  styleUrls: ['./productosagregar.component.css']
})
export class ProductosagregarComponent implements OnInit {
  productos = Array();
  constructor() { }

  ngOnInit() {
  }

  agregar() {
    let producto = prompt("Agregar:");
    this.productos.push(producto);
    return this.productos;
  }

}
