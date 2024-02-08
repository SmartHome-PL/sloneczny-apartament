import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnlockDialogComponent } from '../unlock-dialog/unlock-dialog.component';
import { UnlockDialogService } from '../unlock-dialog/unlock-dialog.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss',
})
export class CheckOutComponent {
  carCode: string = 'obj.pages.osw.check-in.content.locked.label';

  isUnlockedSubscription: Subscription;
  isUnlocked: boolean = false;

  constructor(
    private dialog: MatDialog,
    public unlockDialogService: UnlockDialogService,
    private router: Router
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
    this.isUnlocked = true;
  }

  openDialog(): void {
    this.dialog.open(UnlockDialogComponent, { maxWidth: '38rem' });
  }

  redirectTo(url: string) {
    window.location.href = url;
  }
}
