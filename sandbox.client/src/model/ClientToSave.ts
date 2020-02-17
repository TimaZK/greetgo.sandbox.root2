import {Gender} from "./Gender";
import {Address} from "./Address";
import {Phones} from "./Phones";
import {ClientDisplay} from "./ClientDisplay";

export class ClientToSave {
  public id: number;
  public firstName: string;
  public lastName: string;
  public patron: string;
  public gender: Gender;
  public birthDay: Date;
  public charm: number;
  public factAddress: Address;
  public regAddress: Address;
  public phones: Phones;
}
