import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  borrarHeroe () {
  // this.heroes.splice(0,1)
  console.log(this.heroes.shift())
    
  }
}
