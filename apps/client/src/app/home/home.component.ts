import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  StackedLayoutComponent,
  StackedLayoutMenuItem,
} from '@hchao/shared/ui';

@Component({
  selector: 'app-home',
  imports: [CommonModule, StackedLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menuItems: StackedLayoutMenuItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Tools', url: '/tools' }
  ];
}
