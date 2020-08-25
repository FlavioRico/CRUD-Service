import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  student: Persona = new Persona();
  ngOnInit(): void {
    this.editar();
  }

  actualizar(stundent: Persona){
    this.service.updateStudent(stundent)
    .subscribe(data => {
      this.student = data;
    });
    this.router.navigate(["listar"]);
  }

  editar(){
    let id = localStorage.getItem("id");
    this.service.getStudentById(+id)
    .subscribe(data =>
      {
        this.student = data;
      });
  }
}
