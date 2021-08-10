import { Injectable } from '@angular/core';

function nativeWindow(): Window {
  return window;
}

@Injectable({ providedIn: 'root' })
export class WindowService {
  get nativeWindow(): Window {
    return nativeWindow();
  }
}
