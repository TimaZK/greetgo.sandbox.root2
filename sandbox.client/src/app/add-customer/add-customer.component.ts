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
  private clientToSave = new ClientToSave();

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
    if (this.data) this.clientToSave = this.listService.findBiIdinClientToSave(this.data);
    console.log('this.clientToSave ', this.clientToSave);
    this.myFirstReactiveForm = this.fb.group({
      id: this.clientToSave.id || ([String(this.listService.clientArr.length+1)]),
      firstName: ([this.clientToSave.firstName || '', Validators.required]),
      lastName: ([this.clientToSave.lastName || '', Validators.required]),
      patron: ([this.clientToSave.patron || '', Validators.required]),
      gender: this.fb.control([this.clientToSave.gender || Gender.MALE, Validators.required]),
      birthDay: this.fb.control([this.clientToSave.birthDay || '', Validators.required]),
      charm: this.fb.control([this.clientToSave.charm || '', Validators.required]),
      factAddress: this.fb.group({
        street: this.fb.control(['']),
        house: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
        flat: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
        type: this.fb.control([AddressType.FACT]),
      }),
      regAddress: this.fb.group({
        street: this.fb.control([this.clientToSave.regAddress.street || ''], Validators.required),
        house: this.fb.control([this.clientToSave.regAddress.house || ''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        flat: this.fb.control([this.clientToSave.regAddress.flat || ''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        type: this.fb.control([this.clientToSave.regAddress.type || AddressType.REG]),
      }),
      phones: this.fb.array([
        this.fb.group({
          id: this.fb.control(['']),
          number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
          type: this.fb.control([PhoneType.MOBILE], Validators.required),
        })
      ])
    });

    if (this.clientToSave && this.clientToSave.phones && this.clientToSave.phones.length > 0) {
      this.clientToSave.phones.forEach((phone) => {
        let fg = this.fb.group(phone);
        this.phones.push(fg);
      });
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
    // вот здесь проверяю поле массива на пустоту
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
