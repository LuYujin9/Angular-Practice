import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PasswordValidators } from './change-password-form.validator';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordComponent {
  /*   form = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      PasswordValidators.matchTheOldPassword,
    ]),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [
      Validators.required,
      PasswordValidators.matchTheNewPassword,
    ]),
  }); */

  //contructor 建立 form 的方法  注意,这里的validators外面不要加[]
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.invalidOldPassword,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: PasswordValidators.passwordsShouldMatch } //validator to the formGroup
    );
  }

  newPasswordValue = '';

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  log(a: any) {
    this.newPasswordValue = a.value as string;
    console.log(this.newPasswordValue);
    console.log(a);
  }
}
