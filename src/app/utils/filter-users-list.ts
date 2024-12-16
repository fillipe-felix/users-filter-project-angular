import { IUser } from '../interfaces/User/user.interface';
import { isWithinInterval } from 'date-fns';
import { IFilterOptions } from '../interfaces/filter-options';

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

  return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, userList: IUser[]) => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return userList;
  }

  const filteredListByStatus = userList.filter((user) => user.ativo === status);

  return filteredListByStatus;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, filteredList: IUser[]) => {
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

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList;
}


export { filterUsersList };
