import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { ShowcaseBrandOneComponent } from './showcase-brand-one.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseBrandOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:8001/remoteEntry.js',
            remoteName: 'brandOne',
            exposedModule: './Module',
          }).then((m) => m.BrandOneComponentModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ShowcaseBrandOneComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseBrandOneComponentModule {}
