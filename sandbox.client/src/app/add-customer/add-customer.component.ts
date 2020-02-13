import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {Gender} from "../../model/Gender";
import {ClientToSave} from "../../model/ClientToSave";
import {Address} from "../../model/Address";
import {Phones} from "../../model/Phones";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  client: ClientToSave = new ClientToSave();
  clientArr: ClientToSave[] = [];

  churms: number[] = [1, 2, 3];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
  }
  firstName: string;
  lastName: string;
  patronymic: string;
  gender: number;
  date: Date;
  charm: number;
  factAddress: Address = {} as Address;
  registrAddress: Address = {} as Address;

  ngOnInit() {
  }

  close() {
    this.dialog.closeAll();
  }

  saveClient() {
    this.client.firstName = this.firstName;
    this.client.lastName = this.lastName;
    this.client.patron = this.patronymic;
    if (this.gender == 1) {
      this.client.gender = Gender.MALE;
    } else {
      this.client.gender = Gender.FEMALE;
    }
    this.client.birthDay = this.date;
    for (let i = 0; i < this.churms.length; i++) {
      if (this.charm == this.churms[0]) {
        this.client.charm = this.charm
      } else if (this.charm == this.churms[1]) {
        this.client.charm = this.charm
      } else if (this.charm == this.churms[2]) {
        this.client.charm = this.charm
      }
    }

    let factAddress: Address = {...this.factAddress} as Address;
    factAddress.flat = this.factAddress.flat;
    factAddress.house = this.factAddress.house;
    factAddress.street = this.factAddress.street;

    let registAddress: Address = {...this.registrAddress} as Address;
    registAddress.flat = this.registrAddress.flat;
    registAddress.house = this.registrAddress.house;
    registAddress.street = this.registrAddress.street;

    this.client.factAddress = factAddress;
    this.client.regAddress = registAddress;

    this.clientArr.push(this.client);
    console.log(this.clientArr);
  }
}


