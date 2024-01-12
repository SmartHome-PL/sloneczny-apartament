import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setLanguage(language: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('preferredLanguage', language);
    }
  }

  getLanguage(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('preferredLanguage');
    }
    return null;
  }
}

import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  public getTranslation(lang: string): Observable<any> {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
}
