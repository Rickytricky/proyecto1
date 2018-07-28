import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  texto: string;
  constructor() {
      this.texto = 'Bievenido sea usted! \nDisfrute su estancia :)';
   }

  ngOnInit() {
  }

  alertaClick() {
    alert(this.texto);
    console.log(this.texto);
  }

}
