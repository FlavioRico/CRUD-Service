import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service'
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  studentsExists: boolean;
  personas: Persona[];
  constructor(private service:ServiceService, private router:Router) {
    // this.studentsExists = true;
  }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data => {
      this.personas = data;
      if (this.personas.length == 0){
        console.log(this.personas.length);
        this.studentsExists = false;
      }
      else this.studentsExists = true;
    });
  }

  editar(persona: Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

  eliminar(persona: Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["eliminar"]);
  }
}
