import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItem.model';
import { Router } from '@angular/router';

export interface InfoCard {
  titleBar: {
    icon: string;
    title: string;
    subtitle: string;
  };
  actionBarMenuItems: MenuItem[];
}

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  @Input() infoCardData!: InfoCard;

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
