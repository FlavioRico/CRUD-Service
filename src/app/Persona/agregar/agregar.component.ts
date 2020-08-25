import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  name: String;
  passportNumber: String;
  student: Persona = new Persona();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  crear(){
    this.service.createStudent(this.student).subscribe(
      data=>{
        this.returnListStudents();
        alert(this.student.name + " created.");
      }
    );
  }

  returnListStudents(){
    this.router.navigate(["listar"]);
  }

}
