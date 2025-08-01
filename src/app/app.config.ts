import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideZonelessChangeDetection()
  ]
};

// Register the iconify-icon web component
if (typeof window !== 'undefined') {
  import('iconify-icon').then(() => {
    // Web component is now available globally
  });
}
