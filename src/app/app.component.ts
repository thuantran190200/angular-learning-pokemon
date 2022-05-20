import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  name = 'Angular' + VERSION.major;
  show = false;

  user = {
    name: 'Thuận',
    lastName: 'Trần',
    age: 20,
  }

  handler() {
    console.log('clicked');
  }

  users =[]

  //PokéAPI

}
