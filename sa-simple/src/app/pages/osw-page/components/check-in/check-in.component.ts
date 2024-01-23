import { Component } from '@angular/core';
import { InfoCard } from '../../../../shared/components/info-card/info-card.component';
import { formatDate } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UnlockDialogComponent } from '../unlock-dialog/unlock-dialog.component';
import { UnlockDialogService } from '../unlock-dialog/unlock-dialog.service';
import { Subscription } from 'rxjs';
import { JsonLoaderService } from '../../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../../shared/models/menuItem.model';

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

  directionsCardData: InfoCard = {
    titleBar: {
      icon: 'group_add',
      title: 'obj.pages.osw.check-in.title.label',
      subtitle: 'obj.pages.osw.check-in.subtitle.label',
    },
    actionBarMenuItems: [],
  };

  constructor(
    private dialog: MatDialog,
    public unlockDialogService: UnlockDialogService,
    private jsonLoaderService: JsonLoaderService
  ) {
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/osw-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.directionsCardData.actionBarMenuItems = items.filter((menuItem) =>
          items[1].haveRedirectionTo.includes(menuItem.id)
        );
      });

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
