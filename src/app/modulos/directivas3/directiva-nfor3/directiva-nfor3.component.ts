import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-nfor3',
  templateUrl: './directiva-nfor3.component.html',
  styleUrls: ['./directiva-nfor3.component.css']
})
export class DirectivaNfor3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pelicula: String[] = ['1', 'Capitan America', '3 Horas','Fernando Suarez'];
  pelicula2: String[] = ['2', 'Jumangi', '2 Horas', 'Santiago Hernandez'];
  pelicula3: String[] = ['3', 'La mujer Maravilla', '3 Horas', 'Santiago Hernandez'];
  
}
