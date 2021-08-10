import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { UiKitComponentModule } from './ui-kit/ui-kit.module';

const routes: Route[] = [];

export const UI_KIT_MICROFRONTEND_CONFIG = new InjectionToken(
  'UI_KIT_MICROFRONTEND_CONFIG'
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiKitComponentModule,
    SharedModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
