import {Gender} from "./Gender";
import {Address} from "./Address";
import {Phones} from "./Phones";

export class ClientToSave {
  public id: string;
  public firstName: string;
  public lastName: string;
  public patron: string;
  public gender: Gender;
  public birthDay: Date;
  public charm: string;
  public factAddress = new Address();
  public regAddress = new Address();
  public phones = new Array<Phones>();
}
