import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-model',
  templateUrl: './componente-model.component.html',
  styleUrls: ['./componente-model.component.css']
})
export class ComponenteModelComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }
 TEXTO1=""
 TEXTO2=""
 Suma;

 sumar(){
 this.Suma=(parseInt(this.TEXTO1)+ parseInt(this.TEXTO2))
 }
}
