import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Directivas2Module} from './modulos/directivas2/directivas2.module';
import {Directivas1Module} from './modulos/directivas1/directivas1.module';
import {Directivas3Module} from './modulos/directivas3/directivas3.module';
import {Directivas4Module} from './modulos/directivas4/directivas4.module';
import { ComponenteModelComponent } from './componente/componente-model/componente-model.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ComponenteModelComponent,
  ],
  imports: [
    BrowserModule,
    Directivas2Module,
    Directivas1Module,
    Directivas3Module,
    Directivas4Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
