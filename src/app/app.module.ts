import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPersonsComponent } from './not-found-persons/not-found-persons.component';
import { LoaderComponent } from './loader/loader.component';
import { DeleteComponent } from './Persona/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    NotFoundPersonsComponent,
    LoaderComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
