import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {ClientDisplay} from "../../model/ClientDisplay";
import {ClientToSave} from "../../model/ClientToSave";
import {Gender} from "../../model/Gender";
import {PhoneType} from "../../model/PhoneType";

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  constructor(
    private http: HttpService
  ) {
  }

  loadRecords(): ClientDisplay[] {
    return  this.clientDispayArr;
  }
  // @ts-ignore
  clientDispayArr: ClientDisplay[] = [
    {id: 1, fio: 'Tima Zarlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: 2, fio: 'Bima Narlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: 3, fio: 'Lima Marlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: 4, fio: 'Rima Barlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: 5, fio: 'Hima Qarlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: 6, fio: 'Pima Jarlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: 7, fio: 'Fima Darlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500}
  ];

  // @ts-ignore
  clientArr: ClientToSave[] = [
    {id: 1, firstName: "Tima", lastName: "Zarlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
    factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
    phones: {number: "4123421", type: PhoneType.MOBILE},
    },

    {id: 2, firstName: "Bima", lastName: "Narlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
      factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
      phones: {number: "4123421", type: PhoneType.MOBILE}
    },

    {id: 3, firstName: "Lima", lastName: "Marlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
      factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
      phones: {number: "4123421", type: PhoneType.MOBILE}
    },

    {id: 4, firstName: "Rima", lastName: "Barlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
      factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
      phones: {number: "4123421", type: PhoneType.MOBILE}
    },

    {id: 5, firstName: "Hima", lastName: "Qarlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
      factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
      phones: {number: "4123421", type: PhoneType.MOBILE}
    },

    {id: 6, firstName: "Pima", lastName: "Jarlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
      factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
      phones: {number: "4123421", type: PhoneType.MOBILE}
    },

    {id: 7, firstName: "Fima", lastName: "Darlykov", patron: "Kairatovic", charm: 1, gender: Gender.MALE, birthDay: 'yyyy-MM-dd',
      factAddress: {street: "eafwe", house: "23423", flat: "4234"}, regAddress: {street: "eafwe", house: "23423", flat: "4234"},
      phones: {number: "4123421", type: PhoneType.MOBILE}
    }
  ];

  findBiIdinClientToSave(id) {
    for (let i=0; i<this.clientArr.length; i++) {
      if(id == this.clientArr[i].id) {
        return this.clientArr[i];
      }
    }
  }
}
