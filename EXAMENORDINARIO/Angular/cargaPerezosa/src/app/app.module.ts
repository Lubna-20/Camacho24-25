import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RojoComponent } from './rojo/rojo.component';
import { VerdeComponent } from './verde/verde.component';
import { AzulComponent } from './azul/azul.component';

@NgModule({
  declarations: [
    AppComponent,
    RojoComponent,
    VerdeComponent,
    AzulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
