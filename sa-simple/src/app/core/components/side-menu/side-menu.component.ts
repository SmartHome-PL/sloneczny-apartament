import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { JsonLoaderService } from '../../../shared/services/json-loader/json-loader.service';
import { MenuItem } from '../../../shared/models/menuItem.model';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service/language.service';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  isSideMenuOpen: boolean = false;
  menuItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private jsonLoaderService: JsonLoaderService,
    private translate: TranslateService,
    private languageService: LanguageService,
    public sideMenuService: SideMenuService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.jsonLoaderService
      .loadData<MenuItem[]>('assets/data/top-menu-items.json')
      .subscribe((items: MenuItem[]) => {
        this.menuItems = items;
      });
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
}
