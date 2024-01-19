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
      title: 'obj.pages.osw.directions.title.label',
      subtitle: 'obj.pages.osw.directions.subtitle.label',
    },
    actionBarMenuItems: [
      {
        title: 'obj.menu.options.transport.label',
        path: '/transport',
        icon: 'airport_shuttle',
        disabled: true,
      },
      {
        title: 'obj.menu.options.contact.label',
        path: '/contact',
        icon: 'phone',
        disabled: true,
      },
    ],
  };
}
