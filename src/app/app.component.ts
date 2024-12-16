import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/User/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options';
import { isWithinInterval } from 'date-fns';

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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  private filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  private filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }

  private filterUsersListByStatus(status: boolean | undefined, userList: IUser[]) {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return userList;
    }

    const filteredListByStatus = userList.filter((user) => user.ativo === status);

    return filteredListByStatus;
  }

  private filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, filteredList: IUser[]) {
    const START_DATE_NOT_SELECTED = startDate === undefined || startDate === null;
    const END_DATE_NOT_SELECTED = endDate === undefined || endDate === null;
    console.log(startDate, endDate);

    if (START_DATE_NOT_SELECTED || END_DATE_NOT_SELECTED) {
      return filteredList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    })

    const listFilteredByDate = filteredList.filter(checkDateInterval);

    return listFilteredByDate
  }
}
