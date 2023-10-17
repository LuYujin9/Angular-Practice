import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  //名字为invalid更好
  static invalidOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== '1234') resolve({ invalidOldPassword: true });
        else resolve(null);
      }, 2000);
    });
  }

  static passwordsShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    //此处的control对应form, 这样才能取得form内部的所有value
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword?.value !== confirmPassword?.value)
      return { passwordsShouldMatch: true };
    return null;
  }
}
