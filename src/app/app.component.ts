import { Component } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected($event: IUser) {
    this.showUserDetails = true;
    this.userSelected = $event;
  }
}
