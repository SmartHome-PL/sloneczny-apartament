import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UnlockDialogService } from '../unlock-dialog/unlock-dialog.service';
import { UnlockDialogComponent } from '../unlock-dialog/unlock-dialog.component';

@Component({
  selector: 'app-wi-fi',
  templateUrl: './wi-fi.component.html',
  styleUrl: './wi-fi.component.scss',
})
export class WiFiComponent {
  wiFiName: string = 'obj.pages.osw.wifi.locked.label';
  wiFiPassword: string = 'obj.pages.osw.wifi.locked.label';

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
    this.wiFiName = 'TP-Link_24E8';
    this.wiFiPassword = '90281501';
    this.isUnlocked = true;
  }

  openDialog(): void {
    this.dialog.open(UnlockDialogComponent, { maxWidth: '38rem' });
  }
}
