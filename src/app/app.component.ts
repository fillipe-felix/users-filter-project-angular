import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected($event: IUser) {
    this.userSelected = $event;
    this.showUserDetails = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList
      this.usersListFiltered = this.usersList;
    }, 1000)
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
