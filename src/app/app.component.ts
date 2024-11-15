import { Component, Input, input } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';


interface User {
  name:string;
  id:string;
  avatar:string;
}
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Andrii OZ.';
  users = DUMMY_USERS;
  randomIndex = Math.floor(Math.random() * this.users.length);
  selectedUserID?:string;


  get selectedUser(){
    return this.users.find(
      (user)=> user.id === this.selectedUserID)!;
  }
  onSelectUser(id:string) {
    this.selectedUserID = id;
  }
}
