import { Component } from '@angular/core';

@Component({
  selector: 'micronx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  width = '';

  constructor() {}

  changeSize(value: string) {
    this.width = value;
  }
}
