import { Component } from '@angular/core';
import { navigationLinks } from '../nav-links';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  navLinks = navigationLinks;
  isActive = false;

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
