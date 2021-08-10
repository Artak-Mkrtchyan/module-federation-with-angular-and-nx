import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micronx-showcase-ui-kit',
  templateUrl: './showcase-ui-kit.component.html',
  styleUrls: ['./showcase-ui-kit.component.scss'],
})
export class ShowcaseUiKitComponent implements OnInit {
  width = '';

  constructor() {}

  ngOnInit(): void {}

  changeSize(value: string) {
    this.width = value;
  }
}
