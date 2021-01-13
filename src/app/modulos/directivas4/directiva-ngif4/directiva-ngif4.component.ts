import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ngif4',
  templateUrl: './directiva-ngif4.component.html',
  styleUrls: ['./directiva-ngif4.component.css']
})
export class DirectivaNgif4Component implements OnInit {
  bola:number;
  chispitas:number;
  chocolate:number;
  oreo:number;
  constructor() {
    this.bola=0;
    this.chispitas=0;
    this.chocolate=0;
    this.oreo=0;
   }
 
  
  ngOnInit(): void {
  }
  compro= false;
  compra= false;
}
