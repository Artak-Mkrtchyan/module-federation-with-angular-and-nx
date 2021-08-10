import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { BrandOneComponent } from './brand-one.component';

const routes: Routes = [
  {
    path: '',
    component: BrandOneComponent,
  },
];

@NgModule({
  declarations: [BrandOneComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandOneComponentModule {}
