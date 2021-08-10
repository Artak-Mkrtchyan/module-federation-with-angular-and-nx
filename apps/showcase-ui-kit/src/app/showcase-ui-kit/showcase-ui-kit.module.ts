import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@micronx/shared';
import { ShowcaseUiKitComponent } from './showcase-ui-kit.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseUiKitComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:8003/remoteEntry.js',
            remoteName: 'uiKit',
            exposedModule: './Module',
          }).then((m) => m.UiKitComponentModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ShowcaseUiKitComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseUiKitComponentModule {}
