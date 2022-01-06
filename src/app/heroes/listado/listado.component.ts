import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  tituloListado:string = "LIstado de heroes"
  heroes:string[]=["Thor","Spiderman","Superman","Mujer maravilla"]

  heroeBorrado:string = "";

  borrarItem(){
    this.heroeBorrado = this.heroes.shift() || "";

  }





}
