import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormularioTemplateComponent } from './formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgifComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    ServicioComponent,
    FormularioTemplateComponent,
    FormularioReactivoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgFor,
    NgIf,
    NgStyle,
    NgClass,
    NgModule,
    NgForm,
    NgModel,
    NgModelGroup,
    FormBuilder,
    FormGroup,
    FormControl,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
