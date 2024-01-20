import {
  Component,
  HostListener,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { MenuItem } from '../../../shared/models/menuItem.model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service/language.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss',
})
export class LanguageMenuComponent {
  @Input()
  triggeringButton!: HTMLElement;
  @Input()
  isMobile = true;
  isLanguageMenuOpen = false;
  isFirstLoadGuard = true;

  languageMenuItems: MenuItem[] = [
    {
      title: '🇬🇧',
      path: 'en',
      icon: '',
      disabled: false,
    },
    {
      title: '🇵🇱',
      path: 'pl',
      icon: '',
      disabled: false,
    },
    {
      title: '🇪🇸',
      path: 'es',
      icon: '',
      disabled: true,
    },
    {
      title: '🇨🇿',
      path: 'cs',
      icon: '',
      disabled: true,
    },
    {
      title: '🇸🇰',
      path: 'sl',
      icon: '',
      disabled: true,
    },
    {
      title: '🇺🇦',
      path: 'ua',
      icon: '',
      disabled: true,
    },
    {
      title: '🇮🇹',
      path: 'it',
      icon: '',
      disabled: true,
    },
  ];

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.positionLanguageMenu();
      }, 0);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.isLanguageMenuOpen = false;
    this.positionLanguageMenu();
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.translate.use(language);
    this.isLanguageMenuOpen = false;
    this.positionLanguageMenu();
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
    this.positionLanguageMenu();
  }

  positionLanguageMenu() {
    const menu = document.querySelector('.language-menu') as HTMLElement;
    if (this.triggeringButton && menu) {
      const buttonRect = this.triggeringButton.getBoundingClientRect();
      const menuWidth = menu.offsetWidth + 82;
      const menuHeight = menu.offsetHeight;

      if (!this.isMobile) {
        if (this.isLanguageMenuOpen) {
          menu.style.top = `${buttonRect.top - 4}px`;
          menu.style.left = `${buttonRect.right - menuWidth}px`;
        } else {
          menu.style.top = -menuHeight + 'px';
          menu.style.left = `${buttonRect.right - menuWidth}px`;
        }
      } else {
        if (this.isLanguageMenuOpen) {
          menu.style.top = `${buttonRect.top - 4}px`;
          menu.style.left = `${window.innerWidth - menuWidth - 125}px`;
        } else {
          menu.style.top = `${buttonRect.top - 4}px`;
          menu.style.left = '100%';
        }
      }
    }
  }
}
