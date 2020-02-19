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

  clientArr: ClientToSave[] = [];
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
          this.createInsideArr()
        ])
      });

     if (this.data) {
       this.clientToSave = this.listService.findBiIdinClientToSave(this.data);
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
         this.clientToSave.phones.forEach((phone) => {
           let fg = this.fb.group(phone);
           this.phones.push(fg);
         });
       }
     }
  }

  createInsideArr() {
    return this.fb.group({
      number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
      type: this.fb.control([PhoneType.MOBILE], Validators.required),
    })
  }

  addPhoneField() {
    this.phones.push(this.createInsideArr());
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
    if (this.data) {
      this.myFirstReactiveForm.value.phones.shift();
      this.dialogRef.close(this.myFirstReactiveForm.value);
    } else {
      this.dialogRef.close(this.myFirstReactiveForm.value);
    }
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






//   initForm() {
//     if (this.data) this.clientToSave = this.listService.findBiIdinClientToSave(this.data);
//     console.log('this.clientToSave ', this.clientToSave);
//     this.myFirstReactiveForm = this.fb.group({
//       id: this.clientToSave.id || ([String(this.listService.clientArr.length+1)]),
//       firstName: ([this.clientToSave.firstName || '', Validators.required]),
//       lastName: ([this.clientToSave.lastName || '', Validators.required]),
//       patron: ([this.clientToSave.patron || '', Validators.required]),
//       gender: ([this.clientToSave.gender || Gender.MALE, Validators.required]),
//       birthDay: ([this.clientToSave.birthDay || '', Validators.required]),
//       charm: ([this.clientToSave.charm || '', Validators.required]),
//       factAddress: this.fb.group({
//         street: this.fb.control(['']),
//         house: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
//         flat: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
//         type: this.fb.control([AddressType.FACT]),
//       }),
//       regAddress: this.fb.group({
//         street: this.fb.control([this.clientToSave.regAddress.street || ''], Validators.required),
//         house: this.fb.control([this.clientToSave.regAddress.house || ''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
//         flat: this.fb.control([this.clientToSave.regAddress.flat || ''], [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
//         type: this.fb.control([this.clientToSave.regAddress.type || AddressType.REG]),
//       }),
//       phones: this.fb.array([
//         this.fb.group({
//           id: this.fb.control(['']),
//           number: this.fb.control([''], Validators.pattern(/^-?(0|[1-9]\d*)?$/)),
//           type: this.fb.control([PhoneType.MOBILE], Validators.required),
//         })
//       ])
//     });
//
//     if (this.clientToSave && this.clientToSave.phones && this.clientToSave.phones.length > 0) {
//       this.clientToSave.phones.forEach((phone) => {
//         let fg = this.fb.group(phone);
//         this.phones.push(fg);
//       });
//     }
//   }



// if (this.data) {
      //   this.clientToSave = this.listService.findBiIdinClientToSave(this.data);
      //   this.myFirstReactiveForm.patchValue({
      //
      //     id: this.clientToSave.id,
      //     firstName: this.clientToSave.firstName,
      //     lastName: this.clientToSave.lastName,
      //     patron: this.clientToSave.patron,
      //     gender: this.clientToSave.gender,
      //     birthDay: this.clientToSave.birthDay,
      //     charm: this.clientToSave.charm,
      //
      //     factAddress: ({
      //       street: this.clientToSave.factAddress.street,
      //       house: this.clientToSave.factAddress.house,
      //       flat: this.clientToSave.factAddress.flat,
      //       type: AddressType.FACT,
      //     }),
      //
      //     regAddress: ({
      //       street: this.clientToSave.regAddress.street,
      //       house: this.clientToSave.regAddress.house,
      //       flat: this.clientToSave.regAddress.flat,
      //       type: AddressType.REG,
      //     }),
      //   });
      //   // this.clientToSave.phones.forEach((phone) => {
      //   //   let fg = this.fb.group(phone);
      //   //   this.phones.push(fg);
      //   // })
      //   if (this.clientToSave && this.clientToSave.phones && this.clientToSave.phones.length > 1) {
      //     this.clientToSave.phones.forEach((phone) => {
      //       let fg = this.fb.group(phone);
      //       this.phones.push(fg);
      //     });
      //   }
      // }
