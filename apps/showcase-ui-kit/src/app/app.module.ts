import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowcaseUiKitComponentModule } from './showcase-ui-kit/showcase-ui-kit.module';
import { SharedModule } from '@micronx/shared';
import { RouterModule } from '@angular/router';
import { ShowcaseUiKitComponent } from './showcase-ui-kit/showcase-ui-kit.component';

const routes = [
  {
    path: '',
    component: ShowcaseUiKitComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShowcaseUiKitComponentModule,
    SharedModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
