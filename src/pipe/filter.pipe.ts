import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'RegistrationPipe'
})

export class RegistrationPipe implements PipeTransform{

  transform(input:Array<JSON>, args?:string) {
    let regex = new RegExp(args, "i");
    return input.filter(car => {
      return (car['registration'].match(regex)) ? car['registration'].match(regex).input : "";
    });
  }
}
