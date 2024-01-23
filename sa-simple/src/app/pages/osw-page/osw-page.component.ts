import { Component } from '@angular/core';
import { JsonLoaderService } from '../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../shared/models/menuItem.model';

@Component({
  selector: 'app-osw-page',
  templateUrl: './osw-page.component.html',
  styleUrl: './osw-page.component.scss',
})
export class OswPageComponent {
  menuItems: MenuItem[] = [];
  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit(): void {
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/osw-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.menuItems = items;
      });
  }
}
