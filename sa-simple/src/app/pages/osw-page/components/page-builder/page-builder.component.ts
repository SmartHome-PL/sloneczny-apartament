import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DataLoaderService } from './data-loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBuilderData } from './page-builder.model';
import { DirectionsComponent } from '../directions/directions.component';
import { CheckInComponent } from '../check-in/check-in.component';
import { AmenitiesComponent } from '../amenities/amenities.component';

const componentMappings: { [key: string]: Type<any> } = {
  DirectionsComponent: DirectionsComponent,
  CheckInComponent: CheckInComponent,
  AmenitiesComponent: AmenitiesComponent,
};

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
    componentName: '',
  };

  constructor(
    private route: ActivatedRoute,
    private dataLoaderService: DataLoaderService,
    private router: Router
  ) {}

  @ViewChild('dynamicComponentContainer', {
    read: ViewContainerRef,
    static: true,
  })
  container!: ViewContainerRef;

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
        this.pageBuilderData.componentName = pageData.content.component;
        if (this.pageBuilderData.componentName) {
          this.loadComponent(this.pageBuilderData.componentName);
        }
      } else {
        console.warn(
          'Dane strony nie zostały znalezione dla ścieżki:',
          url[0] + '/' + url[1]
        );
      }
    });
  }

  loadComponent(componentName: string) {
    const componentClass = componentMappings[componentName];

    if (componentClass) {
      const componentRef = this.container.createComponent(componentClass);
    } else {
      console.error('Nie znaleziono komponentu dla:', componentName);
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
