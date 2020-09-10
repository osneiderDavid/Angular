import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivaNgif1Component } from './directivas1/directiva-ngif1/directiva-ngif1.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgif1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
