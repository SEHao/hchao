import { NavMenuItem } from 'libs/shared/ui/src/lib/layout/models/nav-menu-item';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarLayoutComponent } from '@hchao/shared/ui';

@Component({
  selector: 'app-tools',
  imports: [CommonModule, SidebarLayoutComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  navMenuItems: NavMenuItem[] = [
    { label: 'Home', url: '/home' },
    { label: 'Tools', url: '/tools' },
  ];
}
