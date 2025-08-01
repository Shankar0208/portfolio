import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import '@iconify/iconify/dist/iconify.min.js';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
