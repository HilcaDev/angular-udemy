
import { Component } from "@angular/core";

@Component({
  selector:'app-contador',
  template: `


    <!--Todo lo que este entre {{}}, se interpreta como codigo JS-->

    <h1>{{titulo}}</h1>
    <h3>La base es: {{base}}</h3>

    <button (click)="acumular(base)">{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">{{base}}</button>

  `

})


export class ContadorComponent{

  titulo:string = 'Contador App';
  numero:number = 10;
  base:number = 5;

  acumular(base:number){
    this.numero+=base;
  }


}
