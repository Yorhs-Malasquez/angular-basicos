/*se crea este modulo para no recargar el app.module.ts 
*/
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

//utilizando el decorador
@NgModule({
    declarations:[//la declaraciones son u arreglo, van a ser los componentes que tengo aqui
        ListadoComponent,
        HeroeComponent
    ],
    //las cosas que seran visibles fuera de este modulo
    exports:[
        ListadoComponent
    ],
    imports: [
        //aqui adentro van solo modulos
        CommonModule//sirve para utilizar las directivas de angular como
        //el ngFor ngIF etc 
    ]
})

export class HeroesModule {

}