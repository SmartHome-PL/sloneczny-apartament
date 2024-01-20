import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageMenuService {
  private isOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

  get isOpen$() {
    return this.isOpen.asObservable();
  }

  open() {
    this.isOpen.next(true);
  }

  close() {
    this.isOpen.next(false);
  }

  toggle() {
    console.log('O');
    this.isOpen.next(!this.isOpen.value);
  }
}
