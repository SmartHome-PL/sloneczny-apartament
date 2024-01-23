import { Component, OnInit } from '@angular/core';
import { InfoCard } from '../../../../shared/components/info-card/info-card.component';
import { Router } from '@angular/router';
import { JsonLoaderService } from '../../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../../shared/models/menuItem.model';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.scss',
})
export class AmenitiesComponent {
  amenitiesCardData: InfoCard = {
    titleBar: {
      icon: 'movie_filter',
      title: 'obj.pages.osw.amenities.title.label',
      subtitle: 'obj.pages.osw.amenities.subtitle.label',
    },
    actionBarMenuItems: [],
  };
  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit(): void {
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/osw-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.amenitiesCardData.actionBarMenuItems = items.filter((menuItem) =>
          items[2].haveRedirectionTo.includes(menuItem.id)
        );
      });
  }
}
