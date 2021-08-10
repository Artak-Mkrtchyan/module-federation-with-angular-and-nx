import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, ROUTES, Routes, Route } from '@angular/router';
import { ShellMicrofrontendConfig } from '../environments/environment';
import { SHELL_MICROFRONTEND_CONFIG } from './app.module';

const routesFactory = (
  shellMicrofrontendConfig: ShellMicrofrontendConfig
): Routes => {
  const rootRoute: Route = {
    path: '',
    redirectTo: 'ui-kit',
    pathMatch: 'full',
  };

  const routes = shellMicrofrontendConfig.remotes.map((remote) => ({
    path: remote.routePath,
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: remote.url,
        remoteName: remote.name,
        exposedModule: './Module',
      }).then((m) => {
        console.log('Module', remote, m);
        return m[remote.ngModuleName];
      }),
    data: remote.remote,
  }));

  return [rootRoute, ...routes];
};

export const configProviders = [];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {
  static forRoot(): ModuleWithProviders<AppRoutingModule> {
    return {
      ngModule: AppRoutingModule,
      providers: [
        {
          provide: ROUTES,
          useFactory: routesFactory,
          multi: true,
          deps: [SHELL_MICROFRONTEND_CONFIG],
        },
      ],
    };
  }
}
