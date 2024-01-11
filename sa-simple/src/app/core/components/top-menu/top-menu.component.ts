import { Component, OnInit, HostListener } from '@angular/core';
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

  lastScrollTop = 0;
  scrollDownStart = 0;

  private toolbarVisible = false;

  constructor(
    private router: Router,
    private topMenuItemsService: TopMenuItemsService
  ) {}

  ngOnInit(): void {
    this.topMenuItemsService.getMenuItems().subscribe((items) => {
      this.menuItems = items;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let currentScrollPos = window.scrollY;
    let toolbar = document.querySelector('.toolbar') as HTMLElement;

    if (toolbar) {
      if (currentScrollPos > this.lastScrollTop && currentScrollPos > 256) {
        // Scroll Down
        toolbar.style.top = '-64px'; // Wysokość twojego mat-toolbar
      } else {
        // Scroll Up
        toolbar.style.top = '0';
      }
    }

    this.lastScrollTop = currentScrollPos;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const shouldShowToolbar = e.clientY < 64; // 50px od góry okna
    if (shouldShowToolbar && !this.toolbarVisible) {
      this.showToolbar();
    } else if (!shouldShowToolbar && this.toolbarVisible) {
      this.hideToolbar();
    }
  }

  private showToolbar() {
    const toolbar = document.querySelector('.toolbar') as HTMLElement;
    if (toolbar) {
      toolbar.style.top = '0';
      this.toolbarVisible = true;
    }
  }

  private hideToolbar() {
    const toolbar = document.querySelector('.toolbar') as HTMLElement;
    if (toolbar) {
      toolbar.style.top = '-64px'; // Wysokość twojego mat-toolbar
      this.toolbarVisible = false;
    }
  }

  redirectToOswCheckIn() {
    this.router.navigate(['/osw/check-in']);
  }
}