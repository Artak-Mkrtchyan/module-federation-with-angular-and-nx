import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrandOneComponentModule } from './brand-one/brand-one.module';
import { SharedModule } from '@micronx/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrandOneComponentModule,
    SharedModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
