import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Gender} from "../../model/Gender";
import {ClientToSave} from "../../model/ClientToSave";
import {PhoneType} from "../../model/PhoneType";
import {ClientListService} from "../services/client-list.service";
import {ClientListComponent} from "../client-list/client-list.component";
import {AddressType} from "../../model/AddressType";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  private clientToSave = new ClientToSave();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClientListComponent>,
    public listService: ClientListService,
    @Inject (MAT_DIALOG_DATA) public data: ClientToSave
  ) {
  }

  ngOnInit() {
    // debugger
    this.initForm();
  }

  initForm() {
    this.myFirstReactiveForm = this.fb.group({

      id: ([String(this.listService.clientArr.length+1)]),
      firstName: (['', Validators.required]),
      lastName: (['', Validators.required]),
      patron: (['', Validators.required]),
      gender: ([Gender.MALE, Validators.required]),
      birthDay: (['', Validators.required]),
      charm: (['', Validators.required]),

      factAddress: this.fb.group({
        street: this.fb.control(['']),
        house: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
        flat: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
        type: this.fb.control([AddressType.FACT]),
      }),

      regAddress: this.fb.group({
        street: this.fb.control([''], Validators.required),
        house: this.fb.control([''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        flat: this.fb.control([''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        type: this.fb.control([AddressType.REG]),
      }),

      phones: this.fb.array([
        this.createInsideArrForPhones()
      ])
    });

    if (this.data) {
      this.clientToSave = this.listService.findByIdinClientToSave(this.data);
      this.myFirstReactiveForm.patchValue({

        id: this.clientToSave.id,
        firstName: this.clientToSave.firstName,
        lastName: this.clientToSave.lastName,
        patron: this.clientToSave.patron,
        gender: this.clientToSave.gender,
        birthDay: this.clientToSave.birthDay,
        charm: this.clientToSave.charm,

        factAddress: ({
          street: this.clientToSave.factAddress.street,
          house: this.clientToSave.factAddress.house,
          flat: this.clientToSave.factAddress.flat,
          type: AddressType.FACT,
        }),

        regAddress: ({
          street: this.clientToSave.regAddress.street,
          house: this.clientToSave.regAddress.house,
          flat: this.clientToSave.regAddress.flat,
          type: AddressType.REG,
        }),
      });
      if (this.clientToSave && this.clientToSave.phones && this.clientToSave.phones.length > 0) {
        for (let i=0; i<this.clientToSave.phones.length; i++) {
          this.phones.removeAt(i);
        }
        this.clientToSave.phones.forEach((phone) => {
          let fg = this.fb.group(phone);
          this.phones.push(fg);
        });
      }
    }
  }

  createInsideArrForPhones() {
    return this.fb.group({
      number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
      type: this.fb.control([PhoneType.MOBILE], Validators.required),
    })
  }

  addPhoneField() {
    this.phones.push(this.createInsideArrForPhones());
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
    this.dialogRef.close(this.myFirstReactiveForm.value);
  }

  get firstName() {
    return this.myFirstReactiveForm.get('firstName');
  }

  get lastName() {
    return this.myFirstReactiveForm.get('lastName');
  }

  get patron() {
    return this.myFirstReactiveForm.get('patron');
  }

  get birthDay() {
    return this.myFirstReactiveForm.get('birthDay');
  }

  close() {
    this.dialogRef.close();
  }
}
