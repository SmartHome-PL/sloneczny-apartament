import { Injectable } from '@angular/core';

import jsonData from '../../../../../assets/data/osw-menu-items.json';
import { Redirect } from './page-builder.model';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  private pagesData = jsonData;

  constructor() {}

  getPageData(path: string) {
    return this.pagesData.find((p) => p.path === path);
  }

  getRedirectionsData(ids: number[]): Redirect[] {
    return this.pagesData.filter((p) => ids.includes(p.id));
  }
}
