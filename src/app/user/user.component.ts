import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

import {NgOptimizedImage} from '@angular/common';
import {User} from './user.interface';
import {CardComponent} from '../shared/card/card.component';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent
  ],
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





// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex];
//
//   get imagePath(){
//     return 'assets/users/' + this.selectedUser.avatar
//   }
//
//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser =  DUMMY_USERS[randomIndex];
//     console.log();
//   }
// }

// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//
//   imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)
//
//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }
