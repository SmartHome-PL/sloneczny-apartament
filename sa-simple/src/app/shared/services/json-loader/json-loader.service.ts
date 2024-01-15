import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonLoaderService {
  constructor(private http: HttpClient) {}

  loadData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
