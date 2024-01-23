import { Component } from '@angular/core';
import { InfoCard } from '../../../../shared/components/info-card/info-card.component';
import { JsonLoaderService } from '../../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../../shared/models/menuItem.model';

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
    actionBarMenuItems: [],
  };

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit(): void {
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/osw-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.directionsCardData.actionBarMenuItems = items.filter((menuItem) =>
          items[0].haveRedirectionTo.includes(menuItem.id)
        );
      });
  }
}
