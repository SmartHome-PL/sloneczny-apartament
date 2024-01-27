import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnlockDialogComponent } from '../unlock-dialog/unlock-dialog.component';
import { UnlockDialogService } from '../unlock-dialog/unlock-dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss',
})
export class CheckInComponent {
  carCode: string = 'obj.pages.osw.check-in.locked.label';
  pedestrianCode: string = 'obj.pages.osw.check-in.locked.label';

  isUnlockedSubscription: Subscription;
  isUnlocked: boolean = false;

  constructor(
    private dialog: MatDialog,
    public unlockDialogService: UnlockDialogService
  ) {
    this.isUnlockedSubscription =
      this.unlockDialogService.isUnlocked$.subscribe((isUnlocked) => {
        if (isUnlocked) {
          this.unlock();
        }
      });
  }

  unlock() {
    this.carCode = '##5045738#';
    this.pedestrianCode = '#5045738#';
    this.isUnlocked = true;
  }

  openDialog(): void {
    this.dialog.open(UnlockDialogComponent, { maxWidth: '38rem' });
  }
}
