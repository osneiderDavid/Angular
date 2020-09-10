import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaNmodel2Component } from './directiva-nmodel2/directiva-nmodel2.component';
import { DirectivaNfor2Component } from './directiva-nfor2/directiva-nfor2.component';
import { DirectivaSwitch2Component } from './directiva-switch2/directiva-switch2.component';
import { DirectivaNgif2Component } from './directiva-ngif2/directiva-ngif2.component';



@NgModule({
  declarations: [DirectivaNmodel2Component, DirectivaNfor2Component, DirectivaSwitch2Component, DirectivaNgif2Component],
  imports: [
    CommonModule
  ]
})
export class Directivas2Module { }
