import { Component } from '@angular/core';
import { InfoCard } from '../../../../shared/components/info-card/info-card.component';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrl: './directions.component.scss',
})
export class DirectionsComponent {
  directionsCardData: InfoCard = {
    titleBar: {
      icon: 'place',
      title: 'Dojazd',
      subtitle: 'Instrukcja dojazdu do Słonecznego Apartamentu w Oświęcimiu',
    },
    actionBarMenuItems: [
      {
        title: 'Transport',
        path: '/transport',
        icon: 'airport_shuttle',
        disabled: true,
      },
      {
        title: 'Contact',
        path: '/contact',
        icon: 'phone',
        disabled: true,
      },
    ],
  };
}
