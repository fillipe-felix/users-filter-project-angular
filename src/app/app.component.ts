import { Component } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userSelected: IUser = UsersList[0];
}
