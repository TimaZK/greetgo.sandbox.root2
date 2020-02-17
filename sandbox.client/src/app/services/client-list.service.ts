import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {ClientDisplay} from "../../model/ClientDisplay";
import {ClientToSave} from "../../model/ClientToSave";
import {Gender} from "../../model/Gender";

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  constructor(
    private http: HttpService
  ) {
  }

  loadRecords(): ClientDisplay[] {
    return  <ClientDisplay[]>[
      {id: 1, fio: 'Tima Zarlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 2, fio: 'Bima Narlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 3, fio: 'Zimadsfaa', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 4, fio: 'Himasdfasa', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 5, fio: 'Jiasdfasma', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 6, fio: 'Kiasdfama', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 7, fio: 'Limasda', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500}
    ]
  }

  // @ts-ignore
  clientArr: ClientToSave[] = [];
}
