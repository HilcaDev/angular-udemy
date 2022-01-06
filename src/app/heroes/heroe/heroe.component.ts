import { Component } from "@angular/core";

@Component({
  selector:"app-heroe",
  templateUrl:"heroe.component.html"

})

export class HeroeComponent{

  nombre:string="Iroman";
  edad:number = 45;

  get NombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return  `Mi nombre es  ${this.nombre} y tengo ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre= "SpiderMan"
  }

  cambiarEdad():void{
    this.edad=55;
  }

}

