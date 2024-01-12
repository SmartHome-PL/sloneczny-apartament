import { Component, HostListener, Input } from '@angular/core';
import { MenuItem } from '../../../pages/osw-page/services/osw-menu-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-menu',
  templateUrl: './grid-menu.component.html',
  styleUrl: './grid-menu.component.scss',
})
export class GridMenuComponent {
  @Input() menuItems: MenuItem[] = [];
  gridColumns = 4;

  constructor(private router: Router) {}

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

  naviageTo(path: string) {
    this.router.navigate([path]);
  }
}
