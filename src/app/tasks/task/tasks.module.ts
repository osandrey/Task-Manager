import {NgModule} from '@angular/core';
import {TasksComponent} from '../tasks.component';
import {TaskComponent} from './task.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, CreateTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}
