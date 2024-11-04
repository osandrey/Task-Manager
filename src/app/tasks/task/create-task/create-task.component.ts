import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {Task} from '../task.interface';
import {FormsModule} from '@angular/forms';
import {type newTask} from './create-task.model';
import {TasksService} from '../../tasks.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  task!: Task;
  @Input({required : true}) userID!:string;
  @Output() close = new EventEmitter<void>();

  newTask = '';

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userID);
    this.close.emit();
  }

}
