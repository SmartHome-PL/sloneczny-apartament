import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent {
  isSubToolbarOswExpanded = false;

  constructor(private router: Router) {}

  toggleSubToolbar() {
    this.isSubToolbarOswExpanded = !this.isSubToolbarOswExpanded;
  }
}
