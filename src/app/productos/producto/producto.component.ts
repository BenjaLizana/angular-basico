import { Component } from "@angular/core";

@Component({
    selector: 'app-producto',
    templateUrl: `producto.component.html`
})

export class ProductoComponent {

    nombre : string = 'Chaqueta';
    color: string = 'Azul';
    talla: string = 'M';

    get NombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.color} - ${this.talla}`
    }

    cambiarNombre():void {
        this.nombre = 'Polera';
        
    }

    cambiarColor(): void {
        this.color = 'Rojo';
    }

    cambiarTalla(): void {
        this.talla = 'S';
    }

}