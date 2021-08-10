import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micronx-showcase-brand-one',
  templateUrl: './showcase-brand-one.component.html',
  styleUrls: ['./showcase-brand-one.component.scss'],
})
export class ShowcaseBrandOneComponent implements OnInit {
  width = '';

  constructor() {}

  ngOnInit(): void {}

  changeSize(value: string) {
    this.width = value;
  }
}
