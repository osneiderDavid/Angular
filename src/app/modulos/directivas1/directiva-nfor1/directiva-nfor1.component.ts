import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-nfor1',
  templateUrl: './directiva-nfor1.component.html',
  styleUrls: ['./directiva-nfor1.component.css']
})
export class DirectivaNfor1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo='Directiva-ngfor1'
  menor=false;
  mayor=false;
  variable =true;

  public listamenores =[
    {nombre:'cuenta a la mano'},
    {nombre:'cuenta Nequi'},
    {nombre:'corresponsal'}

  ]
  public listamayores =[
    {nombre:'cuenta de ahorros'},
    {nombre:'cuenta corriente'},
    {nombre:'tarjeta de credito'},
    {nombre:'cuenta nequi'}
  ]

}


