import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NaveloguinComponent } from './naveloguin/naveloguin.component';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { TitulosComponent } from './titulos/titulos.component';
import { HistorialLaboralComponent } from './historial-laboral/historial-laboral.component';
import { AcademicoComponent } from './academico/academico.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NaveloguinComponent,
    MisdatosComponent,
    TitulosComponent,
    HistorialLaboralComponent,
    AcademicoComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
