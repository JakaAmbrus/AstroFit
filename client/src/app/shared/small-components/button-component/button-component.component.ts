import { Component } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
})
export class ButtonComponentComponent {
  isHovered = false;

  onButtonHover(hovering: boolean): void {
    this.isHovered = hovering;
  }
}
