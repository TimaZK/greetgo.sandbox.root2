import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {ClientDisplay} from "../../model/ClientDisplay";
import {ClientToSave} from "../../model/ClientToSave";
import {Gender} from "../../model/Gender";
import {PhoneType} from "../../model/PhoneType";
import {AddressType} from "../../model/AddressType";
import {Charm} from "../../model/Charm";
import {ClientToEdit} from "../../model/ClientToEdit";
import {PageFilter} from "../../model/PageFilter";

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  constructor(
    private http: HttpService
  ) {
  }

  listClientDisplay(pageFilter: PageFilter): Promise<ClientDisplay[]> {
    return this.http.get("/client/list")
      .toPromise().then(x=> {
        return x.body;
      });
  }

  saveClient(client: ClientToSave) {
    return this.http.post("/client/save", {clientToSave: JSON.stringify(client)})
      .toPromise().then(x=> {})
  }

  deleteClient(id: string){
    return this.http.delete("/client/delete/" + id, {id: id})
      .toPromise().then(x=> {}).catch(error => error.error)
  }

  getCharms(): Promise<Charm[]> {
    return this.http.get("/client/charm")
      .toPromise().then(x => {
        return x.body;
      });
  }

  clientEdit(id: string): Promise<ClientToEdit> {
    return this.http.post("/client/edit/" + id, {id: id})
      .toPromise().then(x => x.body).catch(error => error.error);
  }

  loadRecords(): ClientDisplay[] {
    return this.clientDispayArr;
  }

  charms: Charm[] = [
    {id: "1", name: "Kind"},
    {id: "2", name: "Rude"},
    {id: "3", name: "Caring"}
  ];
  // @ts-ignore
  clientDispayArr: ClientDisplay[] = [
    {id: "1", fio: 'Tima Zarlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: "2", fio: 'Bima Narlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: "3", fio: 'Lima Marlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: "4", fio: 'Rima Barlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: "5", fio: 'Hima Qarlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: "6", fio: 'Pima Jarlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
    {id: "7", fio: 'Fima Darlykov Kairatovic', age: 20, character: 'Kind', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500}
  ];

  // @ts-ignore
  clientArr: ClientToSave[] = [
    {id: "1", firstName: "Tima", lastName: "Zarlykov", patron: "Kairatovic", charm: "1", gender: Gender.FEMALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}, {id: "2", number: "564563456", type: PhoneType.FAX}]
    },

    {id: "2", firstName: "Bima", lastName: "Narlykov", patron: "Kairatovic", charm: "1", gender: Gender.MALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}]
    },

    {id: "3", firstName: "Lima", lastName: "Marlykov", patron: "Kairatovic", charm: "1", gender: Gender.MALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}]
    },

    {id: "4", firstName: "Rima", lastName: "Barlykov", patron: "Kairatovic", charm: "1", gender: Gender.MALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}]
    },

    {id: "5", firstName: "Hima", lastName: "Qarlykov", patron: "Kairatovic", charm: "1", gender: Gender.MALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}]
    },

    {id: "6", firstName: "Pima", lastName: "Jarlykov", patron: "Kairatovic", charm: "1", gender: Gender.MALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}]
    },

    {id: "7", firstName: "Fima", lastName: "Darlykov", patron: "Kairatovic", charm: "1", gender: Gender.MALE, birthDay: new Date(),
      factAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.FACT}, regAddress: {street: "eafwe", house: "23423", flat: "4234", type: AddressType.REG},
      phones: [{id: "1", number: "4123421", type: PhoneType.MOBILE}]
    }
  ];

}
