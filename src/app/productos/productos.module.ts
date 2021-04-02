import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        ProductoComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports : [
        CommonModule
      
    ],

})

export class ProductosModule {

}