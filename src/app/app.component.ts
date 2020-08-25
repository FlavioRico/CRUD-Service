import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-CRUD';
  constructor(private router: Router){
  }

  listar(){
    this.router.navigate(["listar"]);
  }

  nuevo(){
    this.router.navigate(["add"]);
  }
}
