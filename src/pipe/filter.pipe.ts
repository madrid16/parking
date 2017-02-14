import {Pipe} from '@angular/core';

@Pipe({
  name: 'AgePipe'
})

export class AgePipe {

  transform(input, args?) {
    let regex = new RegExp(args, "i");
    return input.filter(car => {
      return (car.registration.match(regex)) ? car.registration.match(regex).input : "";
    });
  }
}
