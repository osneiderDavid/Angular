import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-switch1',
  templateUrl: './directiva-switch1.component.html',
  styleUrls: ['./directiva-switch1.component.css']
})
export class DirectivaSwitch1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo ='Directiva ng Switch'
  inicio: string = 'home';
}
