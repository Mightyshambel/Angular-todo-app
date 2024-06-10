import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../dummy-users';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent]
})
export class AppComponent {
  title = 'angular-todo-app';
  users = DUMMY_USERS;
   

  onSelectedUser(id:string) {
    console.log("the users with id num"+ id )
  }
}
