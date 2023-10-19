import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() highlighted: boolean = false;

  isHovered = false;

  onHover(hovering: boolean): void {
    this.isHovered = hovering;
  }
}
