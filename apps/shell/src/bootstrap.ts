import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, SHELL_MICROFRONTEND_CONFIG } from './app/app.module';
import {
  environment,
  shellMicrofrontendConfig,
} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  { provide: SHELL_MICROFRONTEND_CONFIG, useValue: shellMicrofrontendConfig },
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
