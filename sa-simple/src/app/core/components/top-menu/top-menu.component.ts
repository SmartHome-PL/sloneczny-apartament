import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MenuItem,
  TopMenuItemsService,
} from '../../services/top-menu-items/top-menu-items.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent implements OnInit {
  isSubToolbarOswExpanded = false;
  timeoutRef: any = null;
  menuItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private topMenuItemsService: TopMenuItemsService
  ) {}

  ngOnInit(): void {
    this.topMenuItemsService.getMenuItems().subscribe((items) => {
      this.menuItems = items;
    });
  }

  redirectToOswCheckIn() {
    this.router.navigate(['/osw/check-in']);
  }
}
