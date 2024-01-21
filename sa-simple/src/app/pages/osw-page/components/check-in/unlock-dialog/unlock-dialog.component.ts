import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UnlockDialogService } from './unlock-dialog.service';
import { formatDate } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrl: './unlock-dialog.component.scss',
})
export class UnlockDialogComponent {
  simplePass: string;
  passwordFormControl = new FormControl('', [Validators.required]);
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UnlockDialogComponent>,
    private unlockDialogService: UnlockDialogService
  ) {
    const today = new Date();
    const formattedDate = formatDate(today, 'ddMMyyyy', 'en-US');
    this.simplePass = `${formattedDate}S@Osw`;
  }

  onEnterClick() {
    if (this.passwordFormControl.value === this.simplePass) {
      this.unlockDialogService.unlock();
      this.dialogRef.close();
    }
  }
}
