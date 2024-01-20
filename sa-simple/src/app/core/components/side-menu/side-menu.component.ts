import {
  Component,
  HostListener,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { JsonLoaderService } from '../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../shared/models/menuItem.model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service/language.service';
import { SideMenuService } from './side-menu.service';

import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @ViewChild('languageMenuComponent')
  languageMenuComponent!: LanguageMenuComponent;
  isSideMenuOpen: boolean = false;
  menuItems: MenuItem[] = [];
  isMobile: boolean = true;

  triggeringButton!: HTMLElement;

  constructor(
    private router: Router,
    private jsonLoaderService: JsonLoaderService,
    private translate: TranslateService,
    private languageService: LanguageService,
    public sideMenuService: SideMenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.setIsMobile();
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/top-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.menuItems = items;
      });

    if (isPlatformBrowser(this.platformId)) {
      this.triggeringButton = document.querySelector(
        'button[aria-expanded]'
      ) as HTMLElement;
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {}, 0);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.setIsMobile();
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

  closeSideMenu() {
    this.sideMenuService.close();
  }

  naviageTo(path: string) {
    this.closeSideMenu();
    this.router.navigate([path]);
  }

  switchLanguage(language: string) {
    this.closeSideMenu();
    this.languageService.setLanguage(language);
    this.translate.use(language);
  }

  getLanguage() {
    if (this.translate.currentLang === 'en') return '🇬🇧';
    else return '🇵🇱';
  }

  toggleLanguageMenu() {
    this.languageMenuComponent.toggleLanguageMenu();
  }
}
