import {Component, computed, inject, Input} from '@angular/core';
import {User} from '../../user/user.interface';
import {Task} from './task.interface';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
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
