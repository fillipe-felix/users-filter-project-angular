import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options';


@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output('onFilter') onFilterEmitt: EventEmitter<IFilterOptions> = new EventEmitter<IFilterOptions>();

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  statusList = [
    {
      description: 'Ativo',
      value: true
    },
    {
      description: 'Inativo',
      value: false
    }
  ]

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
