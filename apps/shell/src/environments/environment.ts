// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export interface MicrofrontendConfig {
  name: string;
  url: string;
  type: string;
  routePath: string;
  ngModuleName: string;
}

export enum AppTypes {
  BRAND = 'brand',
  UI_KIT = 'ui-kit',
  SHOWCASE = 'showcase',
}

export interface WebAppConfig {
  webAppData: string;
}
export interface UiKitConfig {
  uiKitData: string;
}
export interface ShellConfig {
  shellData: string;
}
export interface ShowcaseConfig {
  showcaseData: string;
}

export interface BrandMicrofrontendConfig extends MicrofrontendConfig {
  type: AppTypes.BRAND;
  config: WebAppConfig;
}

export interface UiKitMicrofrontendConfig extends MicrofrontendConfig {
  type: AppTypes.UI_KIT;
  config: UiKitConfig;
}

export interface ShowcaseMicrofrontendConfig extends MicrofrontendConfig {
  type: AppTypes.SHOWCASE;
  remote: BrandMicrofrontendConfig | UiKitMicrofrontendConfig;
  config: ShowcaseConfig;
}

export interface ShellMicrofrontendConfig extends MicrofrontendConfig {
  remotes: Array<ShowcaseMicrofrontendConfig>;
  config: ShellConfig;
}

export const shellMicrofrontendConfig: ShellMicrofrontendConfig = {
  name: 'shell',
  type: 'shell',
  url: '/',
  routePath: '',
  ngModuleName: '',
  config: {
    shellData: 'data',
  },
  remotes: [
    {
      name: 'showcaseBrandOne',
      url: 'http://localhost:5001/remoteEntry.js',
      type: AppTypes.SHOWCASE,
      routePath: 'boo-casino',
      ngModuleName: 'ShowcaseBrandOneComponentModule',
      config: {
        showcaseData: 'data',
      },
      remote: {
        name: 'boo-casino',
        routePath: 'boo-casino',
        ngModuleName: '',
        url: 'http://localhost:8001/remoteEntry.js',
        type: AppTypes.BRAND,
        config: {
          webAppData: 'data',
        },
      },
    },
    {
      name: 'showcaseBrandTwo',
      url: 'http://localhost:5002/remoteEntry.js',
      type: AppTypes.SHOWCASE,
      routePath: 'bcasino-com',
      ngModuleName: 'ShowcaseBrandTwoComponentModule',
      config: {
        showcaseData: 'data',
      },
      remote: {
        name: 'bcasino-com',
        routePath: 'showcase-bcasino-com',
        ngModuleName: '',
        url: 'http://localhost:8002/remoteEntry.js',
        type: AppTypes.BRAND,
        config: {
          webAppData: 'data',
        },
      },
    },
    {
      name: 'showcaseUiKit',
      url: 'http://localhost:5003/remoteEntry.js',
      type: AppTypes.SHOWCASE,
      routePath: 'ui-kit',
      ngModuleName: 'ShowcaseUiKitComponentModule',
      config: {
        showcaseData: 'data',
      },
      remote: {
        name: 'uiKit',
        routePath: '',
        ngModuleName: 'UiKitComponentModule',
        url: 'http://localhost:8003/remoteEntry.js',
        type: AppTypes.UI_KIT,
        config: {
          uiKitData: 'data',
        },
      },
    },
  ],
};

export const environment = {
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
