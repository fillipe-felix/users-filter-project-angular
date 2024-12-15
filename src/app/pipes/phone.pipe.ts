import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11 || typeof phone !== 'string';

    if (INVALID_PHONE) {
      return "Telefone indisponível ou inválido"
    }

    const CELLPHONE = phone.length === 11;

    if (CELLPHONE) {
      return `(${ phone.slice(0, 2) }) ${ phone.slice(2, 7) }-${ phone.slice(7, 11) }`
    } else
      return `(${ phone.slice(0, 2) }) ${ phone.slice(2, 6) }-${ phone.slice(6, 10) }`
  }
}
