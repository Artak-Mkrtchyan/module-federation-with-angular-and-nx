import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micronx-brand-one',
  templateUrl: './brand-one.component.html',
  styleUrls: ['./brand-one.component.scss'],
})
export class BrandOneComponent implements OnInit {
  width = '';

  constructor() {}

  ngOnInit(): void {}

  changeSize(value: string) {
    console.log('shell', value);
    this.width = value;
  }
}
