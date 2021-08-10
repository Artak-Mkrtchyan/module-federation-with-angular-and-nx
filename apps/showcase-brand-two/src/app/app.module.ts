import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowcaseBrandTwoComponentModule } from './showcase-brand-two/showcase-brand-two.module';
import { SharedModule } from '@micronx/shared';
import { RouterModule } from '@angular/router';
import { ShowcaseBrandTwoComponent } from './showcase-brand-two/showcase-brand-two.component';

const routes = [
  {
    path: '',
    component: ShowcaseBrandTwoComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShowcaseBrandTwoComponentModule,
    SharedModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
