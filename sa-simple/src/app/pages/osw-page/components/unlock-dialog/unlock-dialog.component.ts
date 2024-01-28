import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UnlockDialogService } from './unlock-dialog.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrl: './unlock-dialog.component.scss',
})
export class UnlockDialogComponent {
  simplePass: string;
  passwordError: string = '';
  password: string = '';
  passwordPlaceholder: string = '';
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UnlockDialogComponent>,
    private unlockDialogService: UnlockDialogService,
    private translateService: TranslateService
  ) {
    this.simplePass = 'Sloneczny2024';

    this.translateService
      .get('shared.dialog.password.input.placeholder.label')
      .subscribe((res: string) => {
        this.passwordPlaceholder = res;
      });
  }

  onEnterClick() {
    if (this.password === this.simplePass) {
      this.unlockDialogService.unlock();
      this.passwordError = '';
      this.dialogRef.close();
    } else {
      if (this.password.length === 0) {
        this.translateService
          .get('shared.dialog.password.validation.required.label')
          .subscribe((res: string) => {
            this.passwordError = res;
          });
      } else if (this.password.length < 8) {
        this.translateService
          .get('shared.dialog.password.validation.length.label')
          .subscribe((res: string) => {
            this.passwordError = res;
          });
      } else {
        this.translateService
          .get('shared.dialog.password.validation.invalid.label')
          .subscribe((res: string) => {
            this.passwordError = res;
          });
      }
    }
  }
}
