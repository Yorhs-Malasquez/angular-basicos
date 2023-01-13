import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán America'];
  heroeBorrado: string = '';
  con: boolean = false;
  borrarHeroe():void{
    this.heroeBorrado = this.heroes.shift() || '';//devuelve el string o devuelve un strin vacio, se coloca || para
    //borrar el error de undefined
  }

  /*condicionHeroe(): boolean{
    if (this.heroeBorrado ==='') {
        this.con = false;
    } else {
        this.con=true;
    }    
    return this.con; 
  }*/
}
