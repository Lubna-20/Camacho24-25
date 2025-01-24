import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Proyecto1RoutingModule } from './proyecto1/proyecto1-routing.module';
import { ProyectoC1 } from './proyecto1/proyectoC1.component';
import { Proyecto2RoutingModule } from './proyecto2/proyecto2-routing.module';
import { ProyectoC2 } from './proyecto2/proyectoC2.component';
import { HeaderComponent } from './proyecto2/header/header/header.component';
import { FooterComponent } from './proyecto2/footer/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    ProyectoC1,
    ProyectoC2,
    HeaderComponent,
    FooterComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Proyecto1RoutingModule,
    Proyecto2RoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
