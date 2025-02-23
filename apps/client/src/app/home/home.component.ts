import { NavMenuItem } from 'libs/shared/ui/src/lib/layout/models/nav-menu-item';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarLayoutComponent } from '@hchao/shared/ui';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SidebarLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  navMenuItems: NavMenuItem[] = [
    { label: 'Home', url: '/home' },
    { label: 'Tools', url: '/tools' },
  ];
}
