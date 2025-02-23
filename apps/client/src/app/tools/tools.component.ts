import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarLayoutComponent } from '@hchao/shared/ui';

@Component({
  selector: 'app-tools',
  imports: [CommonModule, SidebarLayoutComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {}
