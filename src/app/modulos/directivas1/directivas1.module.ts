import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaNgif1Component } from './directiva-ngif1/directiva-ngif1.component';
import { DirectivaNfor1Component } from './directiva-nfor1/directiva-nfor1.component';
import { DirectivaSwitch1Component } from './directiva-switch1/directiva-switch1.component';
import { DirectivaNmodel1Component } from './directiva-nmodel1/directiva-nmodel1.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [DirectivaNgif1Component, DirectivaNfor1Component, DirectivaSwitch1Component, DirectivaNmodel1Component],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[DirectivaNgif1Component,DirectivaNfor1Component,DirectivaSwitch1Component,DirectivaNmodel1Component]
})

export class Directivas1Module { }
