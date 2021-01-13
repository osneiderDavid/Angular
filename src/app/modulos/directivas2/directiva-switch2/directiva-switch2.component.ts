import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-switch2',
  templateUrl: './directiva-switch2.component.html',
  styleUrls: ['./directiva-switch2.component.css']
})
export class DirectivaSwitch2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  option="";
  NUM1;
  NUM2;
  Sum;
  Iniciar=true;

  option2="";
  NUM3=5;
  NUM4=2;
  TOT;
  Iniciar2=true;


  Valores(){
    if (this.option=="1"){
    this.Sum= (parseInt(this.NUM1) + parseInt(this.NUM2))
    }
    if (this.option=="2"){
    this.Sum= (parseInt(this.NUM1) - parseInt(this.NUM2))
    }
    if (this.option=="3"){
    this.Sum= (parseInt(this.NUM1) * parseInt(this.NUM2))
    }
    return this.Sum;
  }

  Valores2(){
      if (this.option2=="1"){
      this.TOT= (this.NUM3 + this.NUM4);
      }
      if (this.option2=="2"){
      this.TOT= (this.NUM3 - this.NUM4);
      }
      if (this.option2=="3"){
      this.TOT= (this.NUM3 * this.NUM4);
      }  
  }

}