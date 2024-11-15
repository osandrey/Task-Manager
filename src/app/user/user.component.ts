import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

import {User} from './user.interface';




@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  // @Input({required: true}) id!: string;
  // id = input.required<string>();
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    console.log('onSelectUser');
    this.select.emit(this.user.id);
  }
}
