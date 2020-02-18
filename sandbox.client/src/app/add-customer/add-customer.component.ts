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
import {AddressType} from "../../model/AddressType";

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
  private clientToSave: ClientToSave;

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
        id: ([String(this.listService.clientArr.length+1)]),
        firstName: (['', Validators.required]),
        lastName: (['', Validators.required]),
        patron: (['', Validators.required]),
        gender: this.fb.control([Gender.MALE, Validators.required]),
        birthDay: this.fb.control(['', Validators.required]),
        charm: this.fb.control(['', Validators.required]),
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
          this.fb.group({
            id: this.fb.control(['']),
            number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
            type: this.fb.control([PhoneType.MOBILE], Validators.required),
          })
        ])
      });
    } else {
      this.clientToSave = this.listService.findBiIdinClientToSave(this.data);
      this.clientToSave.birthDay = new Date();
      this.myFirstReactiveForm.patchValue(
        {
          id: this.clientToSave.id,
          firstName: this.clientToSave.firstName,
          lastName: this.clientToSave.lastName,
          birthDay: this.clientToSave.birthDay,
          gender: this.clientToSave.gender,
          charm: this.clientToSave.charm,
          regAddress: this.clientToSave.regAddress,
          factAddress: this.clientToSave.factAddress,
          phones: this.clientToSave.phones
        }
      );
    }
  }

  addPhoneField() {
    const phone = this.fb.group({
      id: this.fb.control(['']),
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

























//      this.myFirstReactiveForm = this.fb.group({
//         id: ([this.clientToSave.id]),
//         firstName: ([this.clientToSave.firstName, Validators.required]),
//         lastName: ([this.clientToSave.lastName, Validators.required]),
//         patron: ([this.clientToSave.patron, Validators.required]),
//         gender: this.fb.control([this.clientToSave.gender, Validators.required]),
//         birthDay: this.fb.control([new Date(this.clientToSave.birthDay), Validators.required]),
//         charm: this.fb.control([this.clientToSave.charm, Validators.required]),
//         factAddress: this.fb.group({
//           street: ([this.clientToSave.factAddress.street]),
//           house: this.fb.control([this.clientToSave.factAddress.house], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
//           flat: this.fb.control([this.clientToSave.factAddress.flat], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
//           type: this.fb.control([this.clientToSave.factAddress.type]),
//         }),
//         regAddress: this.fb.group({
//           street: this.fb.control([this.clientToSave.regAddress.street], Validators.required),
//           house: this.fb.control([this.clientToSave.regAddress.house], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
//           flat: this.fb.control([this.clientToSave.regAddress.flat], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
//           type: this.fb.control([this.clientToSave.regAddress.type]),
//         }),
//         phones: this.fb.array([
//           this.fb.group({
//             id: this.fb.control([this.clientToSave.phones[0].id]),
//             number: this.fb.control([this.clientToSave.phones[0].number], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
//             type: this.fb.control([this.clientToSave.phones[0].type], Validators.required),
//           })
//         ])
//       });
