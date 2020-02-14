import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {Gender} from "../../model/Gender";
import {ClientToSave} from "../../model/ClientToSave";
import {Charm} from "../../model/Charm";
import {Address} from "../../model/Address";
import {Phones} from "../../model/Phones";
import {PhoneType} from "../../model/PhoneType";
import {ClientListService} from "../client-list/client-list.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

//   clientFunc(): ClientToSave[] {
//     return this.clientArr
// }

  clientArr: ClientToSave[] = [];
  charms: Charm[] = [
    {id: 1, name: "Kind"},
    {id: 2, name: "Rude"},
    {id: 3, name: "Caring"}
  ];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myFirstReactiveForm = this.fb.group({
      firstName: (['', Validators.required]),
      lastName: (['', Validators.required]),
      patronymic: (['', Validators.required]),
      gender: this.fb.control([Gender.MALE, Validators.required]),
      date: this.fb.control(['', Validators.required]),
      charm: this.fb.control(['', Validators.required]),
      factAddress: this.fb.group({
        street: (['']),
        house: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
        flat: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/))
      }),
      regAddress: this.fb.group({
        street: this.fb.control([''], Validators.required),
        house: this.fb.control([''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        flat: this.fb.control([''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      }),
      phones: this.fb.array([
        this.fb.group({
          number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
          type: this.fb.control([PhoneType.MOBILE], Validators.required),
        })
      ])
    });
  }

  addPhoneField() {
    const phone = this.fb.group({
      number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
      type: this.fb.control([PhoneType.MOBILE], Validators.required),
    });
    this.phones.push(phone);
  }

  deletePhoneField(index: number) {
    if(this.phones.length!==1) {
      this.phones.removeAt(index);
    }
    console.log(this.phones.length);
  }

  get phones() {
    return this.myFirstReactiveForm.get('phones') as FormArray;
  }

  saveClient() {
    this.clientArr.push(this.myFirstReactiveForm.value);
    console.log(this.clientArr);
  }

  close() {
    this.dialog.closeAll();
  }

  get firstName() {
    return this.myFirstReactiveForm.get('firstName');
  }

  get lastName() {
    return this.myFirstReactiveForm.get('lastName');
  }

  get patronymic() {
    return this.myFirstReactiveForm.get('patronymic');
  }

  get date() {
    return this.myFirstReactiveForm.get('date');
  }
}
