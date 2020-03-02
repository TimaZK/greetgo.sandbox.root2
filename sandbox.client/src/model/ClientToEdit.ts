import {Gender} from './Gender';
import {Address} from './Address';
import {Phones} from './Phones';

export class ClientToEdit {
  public id: string;
  public firstName: string;
  public lastName: string;
  public patron: string;
  public gender: Gender;
  public birthDay: Date;
  public charm: string;
  public factAddress: Address;
  public regAddress: Address;
  public phones: Phones[];
}
