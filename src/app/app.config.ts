import { ApplicationConfig  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(), 
    provideAnimations() 
  ]
};

// Register the iconify-icon web component
if (typeof window !== 'undefined') {
  import('iconify-icon').then(() => {
    // Web component is now available globally
  });
}
