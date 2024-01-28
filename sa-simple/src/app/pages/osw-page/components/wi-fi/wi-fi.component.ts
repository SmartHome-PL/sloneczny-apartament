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
  wiFiName25: string = 'obj.pages.osw.wifi.locked.label';
  wiFiName5: string = 'obj.pages.osw.wifi.locked.label';
  wiFiPassword25: string = 'obj.pages.osw.wifi.locked.label';
  wiFiPassword5: string = 'obj.pages.osw.wifi.locked.label';

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
    this.wiFiName25 = 'WiFi 2.5';
    this.wiFiName5 = 'WiFi 5';
    this.wiFiPassword25 = 'Password2.5';
    this.wiFiPassword5 = 'Password5';
    this.isUnlocked = true;
  }

  openDialog(): void {
    this.dialog.open(UnlockDialogComponent, { maxWidth: '38rem' });
  }
}
