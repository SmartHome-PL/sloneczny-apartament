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
import { SideMenuService } from '../side-menu/side-menu.service';
import { LanguageMenuService } from '../language-menu/language-menu.service';
import { Subscription } from 'rxjs';

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
  private isOpenSubscription: Subscription;
  isOpen = false;
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
    private sideMenuService: SideMenuService,
    public languageMenuService: LanguageMenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isOpenSubscription = this.languageMenuService.isOpen$.subscribe(
      (isOpen) => {
        this.isOpen = isOpen;
      }
    );
  }

  ngOnDestroy() {
    if (this.isOpenSubscription) {
      this.isOpenSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.languageMenuService.close();
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.translate.use(language);
    this.sideMenuService.close();
    this.languageMenuService.close();
  }

  toggleLanguageMenu() {
    this.languageMenuService.toggle();
  }

  closeLanguageMenu() {
    this.languageMenuService.close();
  }

  openLanguageMenu() {
    this.languageMenuService.open();
  }

}
