import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaNmodel4Component } from './directiva-nmodel4/directiva-nmodel4.component';
import { DirectivaSwitch4Component } from './directiva-switch4/directiva-switch4.component';
import { DirectivaNfor4Component } from './directiva-nfor4/directiva-nfor4.component';
import { DirectivaNgif4Component } from './directiva-ngif4/directiva-ngif4.component';



@NgModule({
  declarations: [DirectivaNmodel4Component, DirectivaSwitch4Component, DirectivaNfor4Component, DirectivaNgif4Component],
  imports: [
    CommonModule
  ]
})
export class Directivas4Module { }
