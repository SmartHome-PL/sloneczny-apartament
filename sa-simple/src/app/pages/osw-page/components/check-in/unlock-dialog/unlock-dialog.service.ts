import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnlockDialogService {
  private isUnlocked = new BehaviorSubject<boolean>(false);

  constructor() {}

  get isUnlocked$() {
    return this.isUnlocked.asObservable();
  }

  unlock() {
    this.isUnlocked.next(true);
  }
}
