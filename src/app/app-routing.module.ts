import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { DeleteComponent } from './Persona/delete/delete.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'add',
    component: AgregarComponent
  },
  {
    path: 'edit',
    component: EditarComponent
  },
  {
    path: 'eliminar',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
