import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isHovered = false;

  onHover(hovering: boolean): void {
    this.isHovered = hovering;
  }
}
