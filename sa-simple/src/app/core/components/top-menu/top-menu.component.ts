import {
  Component,
  OnInit,
  HostListener,
  PLATFORM_ID,
  Inject,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { JsonLoaderService } from '../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../shared/models/menuItem.model';
import { TranslateService } from '@ngx-translate/core';
import { SideMenuService } from '../side-menu/side-menu.service';
import { LanguageMenuService } from '../language-menu/language-menu.service';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent implements OnInit {
  @ViewChild('languageMenuComponent', { read: ViewContainerRef })
  languageMenuComponentRef!: ViewContainerRef;
  menuItems: MenuItem[] = [];

  isMobile: boolean = true;
  isFirstLoadGuard = true;

  triggeringButton!: HTMLElement;

  isOpenLanguageMenuSubscription: Subscription;
  isOpenLanguageMenu: boolean = false;

  lastScrollTop = 0;
  scrollDownStart = 0;

  constructor(
    private router: Router,
    private jsonLoaderService: JsonLoaderService,
    private translate: TranslateService,
    public sideMenuService: SideMenuService,
    public languageMenuService: LanguageMenuService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {
    this.isOpenLanguageMenuSubscription =
      this.languageMenuService.isOpen$.subscribe((isOpen) => {
        this.isOpenLanguageMenu = isOpen;
      });
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

    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener(
        'click',
        this.handleClickOutside.bind(this),
        true
      );
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener(
        'click',
        this.handleClickOutside.bind(this),
        true
      );
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let currentScrollPos = window.scrollY;
    let toolbar = document.querySelector('.toolbar') as HTMLElement;

    if (toolbar) {
      if (currentScrollPos > this.lastScrollTop && currentScrollPos > 64) {
        // Scroll Down
        toolbar.style.top = '-4rem';
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
    this.sideMenuService.close();
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
    if (this.isOpenLanguageMenu) {
      this.languageMenuService.close();
    }
    this.sideMenuService.toggle();
  }

  naviageTo(path: string) {
    this.router.navigate([path]);
  }

  getLanguage() {
    if (this.translate.currentLang === 'en') return '🇬🇧';
    else return '🇵🇱';
  }

  toggleLanguageMenu() {
    this.languageMenuService.toggle();
  }

  private handleClickOutside(event: MouseEvent) {
    const languageToggleButton = document.getElementById(
      'languageToggleButton'
    );
    if (
      languageToggleButton &&
      event.target instanceof Node &&
      languageToggleButton.contains(event.target)
    ) {
      return;
    }

    const clickedOutside =
      this.languageMenuComponentRef &&
      !this.languageMenuComponentRef.element.nativeElement.contains(
        event.target
      );
    if (clickedOutside) {
      this.languageMenuService.close();
    }
  }
}
