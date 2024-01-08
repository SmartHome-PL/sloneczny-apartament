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

  openSubToolbar() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }

    this.isSubToolbarOswExpanded = true;
  }

  closeSubToolbarWithDelay() {
    this.timeoutRef = setTimeout(() => {
      this.isSubToolbarOswExpanded = false;
    }, 300);
  }

  keepSubToolbarOpen() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }
  }

  redirectToOswCheckIn() {
    this.router.navigate(['/osw/check-in']);
  }
}
