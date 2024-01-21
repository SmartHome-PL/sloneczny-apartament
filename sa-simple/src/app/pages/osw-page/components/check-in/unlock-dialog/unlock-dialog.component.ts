import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnlockDialogService } from './unlock-dialog.service';

@Component({
  selector: 'app-unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrl: './unlock-dialog.component.scss',
})
export class UnlockDialogComponent {
  constructor(
    public dialog: MatDialog,
    private unlockDialogService: UnlockDialogService
  ) {}

  onEnterClick() {
    this.unlockDialogService.unlock();
  }
}
