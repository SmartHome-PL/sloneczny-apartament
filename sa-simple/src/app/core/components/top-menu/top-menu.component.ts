import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TopMenuItemsService } from '../../services/top-menu-items/top-menu-items.service';
import { MenuItem } from '../../../shared/models/menuItem.model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service/language.service';

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

  constructor(
    private router: Router,
    private topMenuItemsService: TopMenuItemsService,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

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

  naviageTo(path: string) {
    this.router.navigate([path]);
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.translate.use(language);
  }

  getLanguage() {
    if (this.translate.currentLang === 'en') return '🇬🇧';
    else return '🇵🇱';
  }
}
