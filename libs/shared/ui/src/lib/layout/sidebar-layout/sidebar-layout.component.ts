import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavMenuItem } from '../models/nav-menu-item';

@Component({
  selector: 'lib-sidebar-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.scss',
})
export class SidebarLayoutComponent {
  navMenuItems = input<NavMenuItem[]>([]);

  isSidebarOpen = signal(false);

  toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }
}
