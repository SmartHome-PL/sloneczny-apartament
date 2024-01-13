import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language-service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sa-simple';

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    translate.setDefaultLang('en');

    const language = this.languageService.getLanguage();
    if (language) {
      this.translate.use(language);
    } else {
      const browserLang = translate.getBrowserLang();
      if (browserLang)
        translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
    }
  }
}
