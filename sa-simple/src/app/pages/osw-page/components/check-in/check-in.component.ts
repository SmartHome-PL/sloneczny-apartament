import { Component } from '@angular/core';
import { InfoCard } from '../../../../shared/components/info-card/info-card.component';
import { formatDate } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss',
})
export class CheckInComponent {
  simplePass: string;
  isUnlocked: boolean = false;
  carCode: string = 'obj.pages.osw.check-in.locked.label';
  pedestrianCode: string = 'obj.pages.osw.check-in.locked.label';
  constructor(private dialog: MatDialog) {
    const today = new Date();
    const formattedDate = formatDate(today, 'ddMMyyyy', 'en-US');
    this.simplePass = `${formattedDate}S@Osw`;
  }
  directionsCardData: InfoCard = {
    titleBar: {
      icon: 'group_add',
      title: 'obj.pages.osw.check-in.title.label',
      subtitle: 'obj.pages.osw.check-in.subtitle.label',
    },
    actionBarMenuItems: [
      {
        title: 'obj.menu.options.directions.label',
        path: '/directions',
        icon: 'location',
        disabled: false,
      },
      {
        title: 'obj.menu.options.contact.label',
        path: '/contact',
        icon: 'phone',
        disabled: true,
      },
    ],
  };

  unlock() {
    this.carCode = '##5045738#';
    this.pedestrianCode = '#5045738#';
    this.isUnlocked = true;
  }

  openDialog(): void {
    this.dialog.open(UnlockDialogComponent, {
      width: '250px',
    });
  }
}
