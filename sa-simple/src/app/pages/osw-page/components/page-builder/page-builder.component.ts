import { Component } from '@angular/core';
import { DataLoaderService } from './data-loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBuilderData } from './page-builder.model';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrl: './page-builder.component.scss',
})
export class PageBuilderComponent {
  pageBuilderData: PageBuilderData = {
    title: '',
    titleIcon: '',
    subtitle: '',
    redirections: [],
  };

  constructor(
    private route: ActivatedRoute,
    private dataLoaderService: DataLoaderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      const pageData = this.dataLoaderService.getPageData(
        url[0] + '/' + url[1]
      );
      if (pageData) {
        this.pageBuilderData.title = pageData.content.title;
        this.pageBuilderData.titleIcon = pageData.content.icon;
        this.pageBuilderData.subtitle = pageData.content.subTitle;
        this.pageBuilderData.redirections =
          this.dataLoaderService.getRedirectionsData(
            pageData.haveRedirectionTo
          );
      } else {
        console.warn(
          'Dane strony nie zostały znalezione dla ścieżki:',
          url[0] + '/' + url[1]
        );
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
