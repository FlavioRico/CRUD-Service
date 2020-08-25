import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  Url = "http://localhost:8080/students";

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createStudent(student: Persona){    
    return this.http.post<Persona>(this.Url, student);
  }

  getStudentById(id){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  
  updateStudent(persona: Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id, persona);
  }

  deleteStudent(persona: Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
}
