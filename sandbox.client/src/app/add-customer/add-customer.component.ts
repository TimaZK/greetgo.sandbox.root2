import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {Gender} from "../../model/Gender";
import {ClientToSave} from "../../model/ClientToSave";
import {Charm} from "../../model/Charm";
import {Address} from "../../model/Address";
import {Phones} from "../../model/Phones";
import {PhoneType} from "../../model/PhoneType";
import {ClientListService} from "../services/client-list.service";
import {ClientDisplay} from "../../model/ClientDisplay";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  clientArr: ClientToSave[] = [];
  // clientDisplayArr: ClientDisplay[] = [];
  charms: Charm[] = [
    {id: 1, name: "Kind"},
    {id: 2, name: "Rude"},
    {id: 3, name: "Caring"}
  ];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public listService: ClientListService,
  ) {
  }

  ngOnInit() {
    this.initForm();
    // this.clientDisplayArr = this.listService.loadRecords();
  }

  initForm() {
    this.myFirstReactiveForm = this.fb.group({
      // id: ([234532]),
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

    this.listService.clientArr = this.clientArr;

    let clientDisplay = new ClientDisplay();

    for (let i=0; i<this.listService.clientArr.length; i++) {
      if(this.listService.clientArr[i].id == null) {
        clientDisplay.id = this.listService.loadRecords().length + 1;
        clientDisplay.fio = '';
        clientDisplay.age = 0;
        clientDisplay.character = '';
        clientDisplay.totalBalanceOfAccounts = 0;
        clientDisplay.maximumBalance = 0;
        clientDisplay.minimumBalance = 0;
      }
    }
    this.listService.loadRecords().unshift(clientDisplay);
    console.log(this.listService.loadRecords());
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



//for (let i=0; i<this.listService.clientArr.length; i++) {
//       this.clientDisplayArr.push()
//     }
