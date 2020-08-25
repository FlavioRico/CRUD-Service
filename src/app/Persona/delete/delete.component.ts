import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  
  student: Persona = new Persona();

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    let id = localStorage.getItem("id");
    this.service.getStudentById(+id)
    .subscribe(data =>
      {
        this.student = data;
      });
  }

  delete(stundent: Persona){
    this.service.deleteStudent(stundent)
    .subscribe(data => {
      this.student = data;
    });
    alert(this.student.name + " deleted...");
    this.router.navigate(["listar"]);
  }

}
