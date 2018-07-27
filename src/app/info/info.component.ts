import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() texto:string;
  constructor() { }

  ngOnInit() {
  }

  alertaClick() {
    this.texto = "";
    this.texto = prompt("Favor de ingresar un valor");
    return console.log(this.texto);
  }

}
