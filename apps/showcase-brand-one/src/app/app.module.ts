import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowcaseBrandOneComponentModule } from './showcase-brand-one/showcase-brand-one.module';
import { SharedModule } from '@micronx/shared';
import { RouterModule } from '@angular/router';
import { ShowcaseBrandOneComponent } from './showcase-brand-one/showcase-brand-one.component';

const routes = [
  {
    path: '',
    component: ShowcaseBrandOneComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShowcaseBrandOneComponentModule,
    SharedModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
