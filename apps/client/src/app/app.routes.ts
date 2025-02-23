import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tools', component: ToolsComponent },
];
