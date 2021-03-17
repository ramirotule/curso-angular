import { Component } from "@angular/core"

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroesComponent {
    nombre: string = 'Ironman';
    edad:number = 35

get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
}
obtenerNombre (){
    return  `${this.nombre} - ${this.edad}`
}
cambiarNombre () {
 return this.nombre='Spiderman';
}
 
cambiarEdad () {
    return this.edad =45;
}
}
