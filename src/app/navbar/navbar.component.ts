import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  texto: string;
  constructor() { }

  ngOnInit() {
  }

  esTec(event: any) {
    this.texto = event.target.value;
  }

  alerta() {
    alert(`Por el momento no se encuentra lo que buscas: ${this.texto}`);
  }

}
