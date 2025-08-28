import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ComponentUser } from './app/component-user/component-user';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
