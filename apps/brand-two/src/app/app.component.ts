import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'micronx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'brand-two';

  constructor(private router: Router) {
    console.log('brand-two', router);
  }
}
