import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrl: './unlock-dialog.component.scss',
})
export class UnlockDialogComponent {
  constructor(public dialog: MatDialog) {}

  onEnterClick() {
    console.log('UNLOCK');
  }
}
