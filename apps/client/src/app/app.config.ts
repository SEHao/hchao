import { providePrimeNG } from 'primeng/config';

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

import { appRoutes } from './app.routes';

const primaryColor = palette('{slate}');
const themePreset = definePreset(Aura, {
  semantic: {
    primary: primaryColor,
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: themePreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
