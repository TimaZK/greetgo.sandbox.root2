import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Gender} from "../../model/Gender";
import {ClientToSave} from "../../model/ClientToSave";
import {Charm} from "../../model/Charm";
import {PhoneType} from "../../model/PhoneType";
import {ClientListService} from "../services/client-list.service";
import {ClientDisplay} from "../../model/ClientDisplay";
import {ClientListComponent} from "../client-list/client-list.component";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  clientArr: ClientToSave[] = [];
  charms: Charm[] = [
    {id: 1, name: "Kind"},
    {id: 2, name: "Rude"},
    {id: 3, name: "Caring"}
  ];

  public newClientDisplay = new ClientDisplay();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClientListComponent>,
    public listService: ClientListService,
    @Inject (MAT_DIALOG_DATA) public data: ClientToSave
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if (this.data == null) {
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
    } else {
      this.myFirstReactiveForm = this.fb.group({
        firstName: ([this.data.firstName, Validators.required]),
        lastName: ([this.data.lastName, Validators.required]),
        patronymic: ([this.data.patron, Validators.required]),
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
    this.listService.clientArr = this.clientArr;
    this.newClientDisplay = new ClientDisplay();

    for (let i=0; i<this.listService.clientArr.length; i++) {
      if(this.listService.clientArr[i].id == null) {
        this.newClientDisplay.id = this.listService.loadRecords().length + 1;
        this.newClientDisplay.fio = this.listService.clientArr[i].firstName + " " + this.listService.clientArr[i].lastName;
        this.newClientDisplay.age = 0;
        this.newClientDisplay.character = 'Kind';
        this.newClientDisplay.totalBalanceOfAccounts = 0;
        this.newClientDisplay.maximumBalance = 0;
        this.newClientDisplay.minimumBalance = 0;
        this.listService.clientArr[i].clientDisplay = this.newClientDisplay;
        this.dialogRef.close(this.newClientDisplay);
        // console.log(this.newClientDisplay);
        console.log(this.listService.clientArr[i]);
      }
    }
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
