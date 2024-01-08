import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MenuItem {
  title: string;
  link: string;
  submenu: MenuItem;
}

@Injectable({
  providedIn: 'root',
})
export class TopMenuItemsService {
  private menuItemsUrl = 'assets/data/menu-items.json';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuItemsUrl);
  }
}
