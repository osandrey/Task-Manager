import {Component, computed, inject, Input} from '@angular/core';
import {User} from '../../user/user.interface';
import {Task} from './task.interface';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input() user!: User;
  @Input() userID!: string;
  @Input({required: true}) task!: Task;

  userName  = computed(():string => {return this.user.name})

  private tasksService= inject(TasksService);


  onCompleteTask (){
    this.tasksService.removeTask(this.task.id)
  }
}
