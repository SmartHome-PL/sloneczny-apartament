import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonLoaderService } from '../../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../../shared/models/menuItem.model';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss',
})
export class ObjectListComponent {
  menuItems: MenuItem[] = [];
  constructor(
    private router: Router,
    private jsonLoaderService: JsonLoaderService
  ) {}

  ngOnInit(): void {
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/home-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.menuItems = items;
      });
  }
}
