import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngif1',
  templateUrl: './directiva-ngif1.component.html',
  styleUrls: ['./directiva-ngif1.component.css']
})
export class DirectivaNgif1Component implements OnInit {

  titulo='Directiva-ngif1'
  Matematicas:number;
  Espanol:number;
  Ciencias:number;
  Sociales:number;
  Total:number;
  constructor() { 
    this.Matematicas=0;
    this.Espanol=0;
    this.Ciencias=0;
    this.Sociales=0;
  }

  ngOnInit(): void {
  }

}
