import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-nfor4',
  templateUrl: './directiva-nfor4.component.html',
  styleUrls: ['./directiva-nfor4.component.css']
})
export class DirectivaNfor4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public IniSesion = [
    {Usuario: 'Manu', Descripcion:"Gafitas, inteligente Calidad de Persona xd"},
    {Usuario: 'Cris', Descripcion:"Perdido, pensador Intel Pentium RAM 4 gb xd"},
    {Usuario: 'Kev',Descripcion:"Guapo, inteligente atrativo xd"},
    {Usuario: 'Os', Descripcion:"Coste, HecheNojoda Intel Pentium RAM 3 gb xd"},
    {Usuario: 'Mi', Descripcion:"Micha, HecheNojodx2 Intel 1 RAM 500 mb xd"}
    
]
}
