import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { ShowcaseBrandTwoComponent } from './showcase-brand-two.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseBrandTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:8002/remoteEntry.js',
            remoteName: 'brandTwo',
            exposedModule: './Module',
          }).then((m) => m.BrandTwoComponentModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ShowcaseBrandTwoComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseBrandTwoComponentModule {}
