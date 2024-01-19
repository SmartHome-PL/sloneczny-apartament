import {
  Component,
  OnInit,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { JsonLoaderService } from '../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../shared/models/menuItem.model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service/language.service';
import { SideMenuService } from '../side-menu/side-menu.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  isMobile: boolean = true;
  isSideMenuOpen: boolean = false;
  isLanguageMenuOpen = false;
  isFirstLoadGuard = true;

  lastScrollTop = 0;
  scrollDownStart = 0;

  constructor(
    private router: Router,
    private jsonLoaderService: JsonLoaderService,
    private translate: TranslateService,
    private languageService: LanguageService,
    public sideMenuService: SideMenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setIsMobile();

    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/top-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.menuItems = items;
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.positionLanguageMenu();
      }, 0);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let currentScrollPos = window.scrollY;
    let toolbar = document.querySelector('.toolbar') as HTMLElement;

    if (toolbar) {
      if (currentScrollPos > this.lastScrollTop && currentScrollPos > 64) {
        // Scroll Down
        toolbar.style.top = '-4rem'; // Wysokość twojego mat-toolbar
      } else {
        // Scroll Up
        toolbar.style.top = '0';
      }
    }

    this.lastScrollTop = currentScrollPos;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.setIsMobile();

    if (this.isLanguageMenuOpen) {
      this.positionLanguageMenu();
    }
  }

  private setIsMobile() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width > 800) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    }
  }

  toggleSideMenu() {
    this.sideMenuService.toggle();
  }

  naviageTo(path: string) {
    this.router.navigate([path]);
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.translate.use(language);
    this.isLanguageMenuOpen = false;
  }

  getLanguage() {
    if (this.translate.currentLang === 'en') return '🇬🇧';
    else return '🇵🇱';
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;

    this.positionLanguageMenu();
  }

  positionLanguageMenu() {
    const button = document.querySelector(
      'button[aria-expanded]'
    ) as HTMLElement;
    const sideMenuButton = document.querySelector(
      '.side-menu-button'
    ) as HTMLElement;
    const menu = document.querySelector('.language-menu') as HTMLElement;

    if (button && menu) {
      const buttonRect = button.getBoundingClientRect();
      const menuWidth = menu.offsetWidth;
      const sideMenuButtonWidth = sideMenuButton
        ? sideMenuButton.offsetWidth
        : 0;

      if (this.isLanguageMenuOpen) {
        menu.style.top = buttonRect.bottom + 'px';
        menu.style.left = `${buttonRect.right - menuWidth}px`;
      } else {
        if (this.isFirstLoadGuard) {
          menu.style.top = '-4rem';
          menu.style.left = `${buttonRect.right - menuWidth + 64}px`;
          this.isFirstLoadGuard = false;
          console.log(sideMenuButtonWidth);
        } else {
          menu.style.top = '-4rem';
          menu.style.left = `${buttonRect.right - menuWidth}px`;
        }
      }
    }
  }
}
