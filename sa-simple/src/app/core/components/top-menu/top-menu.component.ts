import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent {
  isSubToolbarOswExpanded = false;
  timeoutRef: any = null;

  constructor(private router: Router) {}

  openSubToolbar() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }

    this.isSubToolbarOswExpanded = true;
  }

  closeSubToolbarWithDelay() {
    this.timeoutRef = setTimeout(() => {
      this.isSubToolbarOswExpanded = false;
    }, 300);
  }

  keepSubToolbarOpen() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }
  }
}
