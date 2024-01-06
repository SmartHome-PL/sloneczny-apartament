import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent {
  constructor(private router: Router) {}

  navigateToHomepage() {
    this.router.navigate(['/']);
  }

  navigateToObjects() {
    this.router.navigate(['/objects']);
  }
}
