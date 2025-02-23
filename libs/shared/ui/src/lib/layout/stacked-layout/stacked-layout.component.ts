import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { NavMenuItem } from '../models/nav-menu-item';

@Component({
  selector: 'lib-stacked-layout',
  imports: [CommonModule],
  templateUrl: './stacked-layout.component.html',
  styleUrl: './stacked-layout.component.scss',
})
export class StackedLayoutComponent {
  menuItems = input<NavMenuItem[]>([]);
}
