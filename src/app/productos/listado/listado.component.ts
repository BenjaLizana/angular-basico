import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  productos: string [] = ['Chaqueta','Pantalón','Polera'];

  productoBorrado : string = '';

  borrar(){
    
  this.productoBorrado = this.productos.shift() || '';

  }
}




