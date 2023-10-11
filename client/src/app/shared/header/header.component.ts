import { Component } from '@angular/core';
import { navigationLinks } from './nav-links';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navLinks = navigationLinks;
  isHovered = false;

  onHover(hovering: boolean): void {
    this.isHovered = hovering;
  }
}
