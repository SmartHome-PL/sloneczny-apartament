import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  MenuItem,
  OswMenuItemsService,
} from './services/osw-menu-item.service';

@Component({
  selector: 'app-osw-page',
  templateUrl: './osw-page.component.html',
  styleUrl: './osw-page.component.scss',
})
export class OswPageComponent {
  menuItems: MenuItem[] = [];
  constructor(
    private router: Router,
    private oswMenuItemsService: OswMenuItemsService
  ) {}

  ngOnInit(): void {
    this.oswMenuItemsService.getMenuItems().subscribe((items) => {
      this.menuItems = items;
    });
  }
}
