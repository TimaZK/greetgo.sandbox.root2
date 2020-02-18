import {AddressType} from "./AddressType";

export class Address {
  public street: string;
  public house: number;
  public flat: number;
  public type: AddressType;

  public static create(a: any): Address {
    const ret = new Address();
    ret.assign(a);
    return ret;
  }

  assign(a: any) {
    this.street = a.street;
    this.house = a.house;
    this.flat = a.flat;
  }

}
