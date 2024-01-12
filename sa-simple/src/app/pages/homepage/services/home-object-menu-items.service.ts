import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MenuItem {
  title: string;
  path: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeObjectMenuItemsService {
  private menuItemsUrl = 'assets/data/home-menu-items.json';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuItemsUrl);
  }
}
