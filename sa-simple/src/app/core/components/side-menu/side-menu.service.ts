import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
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
    this.isOpen.next(!this.isOpen.value);
  }
}
