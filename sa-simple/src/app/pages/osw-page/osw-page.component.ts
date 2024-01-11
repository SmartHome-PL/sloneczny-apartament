import { Component, HostListener } from '@angular/core';
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
  gridColumns: number = 4;
  constructor(
    private router: Router,
    private oswMenuItemsService: OswMenuItemsService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.oswMenuItemsService.getMenuItems().subscribe((items) => {
      this.menuItems = items;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width > 1200) {
        this.gridColumns = 4;
      } else if (width > 800) {
        this.gridColumns = 3;
      } else {
        this.gridColumns = 2;
      }
    }
  }
}
