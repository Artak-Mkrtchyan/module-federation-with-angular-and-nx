import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponentModule } from './shell/shell.module';
import { SharedModule } from '@micronx/shared';
import { ShellMicrofrontendConfig } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';
import { ConfigerService } from './configer.service';

export const SHELL_MICROFRONTEND_CONFIG = new InjectionToken(
  'SHELL_MICROFRONTEND_CONFIG'
);

// const xxx = {
//   uiKit: new InjectionToken('UI_KIT_MICROFRONTEND_CONFIG'),
//   booCasino: new InjectionToken('BOO_CASINO_MICROFRONTEND_CONFIG'),
//   bcasino: new InjectionToken('BCASINO_MICROFRONTEND_CONFIG'),
// };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellComponentModule,
    SharedModule,
    AppRoutingModule.forRoot(),
  ],
  providers: [
    {
      provide: ConfigerService,
      useFactory: (shellMicrofrontendConfig: ShellMicrofrontendConfig) => {
        return new ConfigerService(shellMicrofrontendConfig.remotes);
      },
      deps: [SHELL_MICROFRONTEND_CONFIG],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
