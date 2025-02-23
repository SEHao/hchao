import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
];
