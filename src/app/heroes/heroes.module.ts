import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations:[ //Contienen mis componentes
    HeroeComponent,
    ListadoComponent
  ],

  exports:[ // que cosas quiero hacer visible fuera de este modulo
    ListadoComponent
  ],

  imports:[ // modulos
    CommonModule // se tiene que importar porque gracias a este utilizamos las directivas nfor, ngif entre otras
  ]
})

export class HeroesModule{

}
