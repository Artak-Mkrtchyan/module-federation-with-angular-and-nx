import { Injectable, InjectionToken } from '@angular/core';
import { ShowcaseMicrofrontendConfig } from '../../../../apps/shell/src/environments/environment';

export interface ShowcaseMicrofrontendConfigMap {
  [key: string]: InjectionToken<ShowcaseMicrofrontendConfig>;
}

@Injectable({ providedIn: 'root' })
export class ConfigerService {
  #showcaseMicrofrontendConfigMap: ShowcaseMicrofrontendConfigMap;

  constructor(remotes: Array<ShowcaseMicrofrontendConfig>) {
    this.#showcaseMicrofrontendConfigMap = remotes.reduce(
      (
        previousValue: ShowcaseMicrofrontendConfigMap,
        currentValue: ShowcaseMicrofrontendConfig
      ) => {
        const token = new InjectionToken(
          `${currentValue.name.toUpperCase()}_MICROFRONTEND_CONFIG`
        );

        return {
          ...previousValue,
          [currentValue.name]: token,
        };
      },
      {}
    );
  }

  getInjectionToken(name: string) {
    return this.#showcaseMicrofrontendConfigMap[name];
  }
}
