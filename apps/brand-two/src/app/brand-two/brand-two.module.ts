import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { BrandTwoComponent } from './brand-two.component';

const routes: Routes = [
  {
    path: '',
    component: BrandTwoComponent,
  },
];

@NgModule({
  declarations: [BrandTwoComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandTwoComponentModule {}
