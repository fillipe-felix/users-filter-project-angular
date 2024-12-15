import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/User/user.interface';


@Component({
  selector: 'app-users-list',
  standalone: false,

  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true }) usersList: IUser[] = {} as IUser[];
  @Output('userSelected') userSelectedEmitt: EventEmitter<IUser> = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
