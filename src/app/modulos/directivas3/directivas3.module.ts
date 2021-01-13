import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaNgif3Component } from './directiva-ngif3/directiva-ngif3.component';
import { DirectivaSwitch3Component } from './directiva-switch3/directiva-switch3.component';
import { DirectivaNfor3Component } from './directiva-nfor3/directiva-nfor3.component';
import { DirectivaNmodel3Component } from './directiva-nmodel3/directiva-nmodel3.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DirectivaNgif3Component, DirectivaSwitch3Component, DirectivaNfor3Component, DirectivaNmodel3Component],
  imports: [
    CommonModule,
    FormsModule
    
  ], exports:[DirectivaNgif3Component,DirectivaSwitch3Component,DirectivaNfor3Component,DirectivaNmodel3Component
    ]
})
export class Directivas3Module { }
