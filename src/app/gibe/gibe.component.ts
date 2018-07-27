import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gibe',
  templateUrl: './gibe.component.html',
  styleUrls: ['./gibe.component.css']
})
export class GibeComponent implements OnInit {
  // numero: number;
  // palabra: string;
  // funcion: string;
  // objeto: any;

  constructor() { 
    // this.objeto = {
    //   nombre: "ricardo",
    //   apellido: "Calderon"
    // }
  }

  regresarValor() {
    return true;
  }

  ngOnInit() {
  }

}
