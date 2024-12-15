import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/User/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      !address.numero === null ||
      !address.numero === undefined ||
      typeof address !== 'object';

    if (INVALID_ADDRESS) {
      return 'Endereço indisponivel ou inválido';
    }

    return `${ address.rua }, ${ address.numero }, ${ address.cidade } - ${ address.estado }`;
  }
}
