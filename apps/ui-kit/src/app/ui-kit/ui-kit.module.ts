import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { UiKitComponent } from './ui-kit.component';

const routes: Routes = [
  {
    path: '',
    component: UiKitComponent,
    // children: [
    //   {
    //     path: 'brand',
    //     loadChildren: () =>
    //       loadRemoteModule({
    //         remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //         remoteName: 'brand',
    //         exposedModule: './Module',
    //       }).then((m) => m.BrandComponentModule),
    //   },
    // ],
  },
];

@NgModule({
  declarations: [UiKitComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitComponentModule {}
