import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-grid-menu',
  templateUrl: './grid-menu.component.html',
  styleUrl: './grid-menu.component.scss',
})
export class GridMenuComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  gridColumns = 2;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setGridColumns();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.setGridColumns();
  }

  private setGridColumns() {
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

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
