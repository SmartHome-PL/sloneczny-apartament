import { Component } from '@angular/core';
import { InfoCard } from '../../../../shared/components/info-card/info-card.component';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss',
})
export class CheckInComponent {
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
}
