import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Contador APP';
  numero = 10;
  base =15;
  acumular ( valor: number){
    this.numero += valor  }
}
