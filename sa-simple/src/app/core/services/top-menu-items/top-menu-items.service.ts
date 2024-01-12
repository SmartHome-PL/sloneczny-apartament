import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../../../shared/models/menuItem.model';

@Injectable({
  providedIn: 'root',
})
export class TopMenuItemsService {
  private menuItemsUrl = 'assets/data/top-menu-items.json';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuItemsUrl);
  }
}
