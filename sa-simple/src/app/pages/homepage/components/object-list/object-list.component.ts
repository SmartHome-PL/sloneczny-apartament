import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  HomeObjectMenuItemsService,
  MenuItem,
} from '../../services/home-object-menu-items.service';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss',
})
export class ObjectListComponent {
  menuItems: MenuItem[] = [];
  constructor(
    private router: Router,
    private homeObjectMenuItemsService: HomeObjectMenuItemsService
  ) {}

  ngOnInit(): void {
    this.homeObjectMenuItemsService.getMenuItems().subscribe((items) => {
      this.menuItems = items;
    });
  }
}
