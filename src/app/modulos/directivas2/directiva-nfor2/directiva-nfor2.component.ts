import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-nfor2',
  templateUrl: './directiva-nfor2.component.html',
  styleUrls: ['./directiva-nfor2.component.css']
})
export class DirectivaNfor2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  public Lista = [
    {Nombre: "ARTURO", Edad: 13},
    {Nombre: "ISABEL", Edad: 23},
    {Nombre: "MARIA", Edad: 33},
]

lista2:string[]=["Hola","DONY","QUE","TAL","ESTAS"];


  

}
