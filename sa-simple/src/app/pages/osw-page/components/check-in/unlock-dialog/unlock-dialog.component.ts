import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UnlockDialogService } from './unlock-dialog.service';
import { formatDate } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function correctPasswordValidator(correctPassword: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isIncorrect = control.value !== correctPassword;
    return isIncorrect ? { incorrectPassword: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrl: './unlock-dialog.component.scss',
})
export class UnlockDialogComponent {
  simplePass: string;
  passwordError: string | null = null;
  passwordFormControl = new FormControl();
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UnlockDialogComponent>,
    private unlockDialogService: UnlockDialogService,
    private cdr: ChangeDetectorRef
  ) {
    const today = new Date();
    const formattedDate = formatDate(today, 'ddMMyyyy', 'en-US');
    this.simplePass = `${formattedDate}S@Osw`;

    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      correctPasswordValidator(this.simplePass),
    ]);
  }

  onEnterClick() {
    if (this.passwordFormControl.value === this.simplePass) {
      this.unlockDialogService.unlock();
      this.passwordError = null;
      this.dialogRef.close();
    } else {
      this.passwordError = 'Password is incorrect.';
      this.cdr.detectChanges();
    }
  }
}
