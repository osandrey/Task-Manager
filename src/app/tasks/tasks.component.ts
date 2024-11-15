import {Component, computed, Input, input} from '@angular/core';

import {type newTask} from './task/create-task/create-task.model';
import {TasksService} from './tasks.service';

interface User {
  id:string;
  avatar:string;
  name:string;
}

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) userID!: string;
  @Input({required: true}) user!: User;
  showForm: boolean = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userID)
  }

  get getImg(){
    return '/assets/users/'+ this.user.avatar;
  }

  onMakeClick(){
    this.showForm = !this.showForm;
  }

  onCancelAddTask(){
    this.showForm = false;
  }

  onCompleteTask(id:string) {
    this.tasksService.removeTask(id)
  }

}
