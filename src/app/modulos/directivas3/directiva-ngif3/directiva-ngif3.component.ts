import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngif3',
  templateUrl: './directiva-ngif3.component.html',
  styleUrls: ['./directiva-ngif3.component.css']
})
export class DirectivaNgif3Component implements OnInit {

  Tarjeta:number;
  Procesador:number;
  Memoria:number;
  Disco:number;
  Ventiladores:number;
  total:number;
  deci:string;
  constructor() { 
    this.Tarjeta=0;
    this.Procesador=0;
    this.Memoria=0;
    this.Disco=0;
    this.Ventiladores=0;
    this.total=(this.Tarjeta+this.Procesador+this.Memoria+this.Disco+this.Ventiladores);
    this.deci="idk";
  }
  

  ngOnInit(): void {
  }

}
