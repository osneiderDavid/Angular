import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaNgif1Component } from './directiva-ngif1/directiva-ngif1.component';
import { DirectivaNfor1Component } from './directiva-nfor1/directiva-nfor1.component';
import { DirectivaSwitch1Component } from './directiva-switch1/directiva-switch1.component';
import { DirectivaNmodel1Component } from './directiva-nmodel1/directiva-nmodel1.component';




@NgModule({
  declarations: [DirectivaNgifComponent, DirectivaNgif1Component, DirectivaNfor1Component, DirectivaSwitch1Component, DirectivaNmodel1Component, DirectivaNgif2Component, DirectivaNfor2Component, DirectivaNfor3Component, DirectivaNfor4Component, DirectivaNgif3Component, DirectivaNgif4Component, DirectivaSwitch2Component, DirectivaSwitch3Component, DirectivaSwitch4Component, DirectivaNmodel2Component, DirectivaNmodel3Component, DirectivaNmodel4Component],
  imports: [
    CommonModule
  ]
})
export class Directivas1Module { }
