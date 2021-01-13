import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaNmodel4Component } from './directiva-nmodel4/directiva-nmodel4.component';
import { DirectivaSwitch4Component } from './directiva-switch4/directiva-switch4.component';
import { DirectivaNfor4Component } from './directiva-nfor4/directiva-nfor4.component';
import { DirectivaNgif4Component } from './directiva-ngif4/directiva-ngif4.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DirectivaNmodel4Component, DirectivaNfor4Component, DirectivaSwitch4Component, DirectivaNgif4Component],
  imports: [
    CommonModule,FormsModule
  ],exports:[DirectivaNmodel4Component, DirectivaNfor4Component, DirectivaSwitch4Component, DirectivaNgif4Component]
})
export class Directivas4Module { }