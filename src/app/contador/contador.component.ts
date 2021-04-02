import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
<h3>La base es : <strong>{{ base }}</strong></h3>

<button (click)="acumulate(base)"> + {{ base }} </button>

<span>{{ num }}</span>

<button (click)="acumulate(-base)"> - {{ base }} </button>

    
    `
})

export class  ContadorComponent {
    title: string = 'Count App';
    num: number = 10;
    base: number = 5;
  
  acumulate( valor:number) {
    this.num += valor;
  }

}