import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header-component/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks/tasks.component';
import {NgFor, NgIf} from '@angular/common';

interface User {
  name:string;
  id:string;
  avatar:string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
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
