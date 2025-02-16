import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface StackedLayoutMenuItem {
  label: string;
  url: string;
}

@Component({
  selector: 'lib-stacked-layout',
  imports: [CommonModule],
  templateUrl: './stacked-layout.component.html',
  styleUrl: './stacked-layout.component.scss',
})
export class StackedLayoutComponent {
  menuItems = input<StackedLayoutMenuItem[]>([]);
}
