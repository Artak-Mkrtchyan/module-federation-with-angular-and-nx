import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micronx-brand-two',
  templateUrl: './brand-two.component.html',
  styleUrls: ['./brand-two.component.scss'],
})
export class BrandTwoComponent implements OnInit {
  width = '';

  constructor() {}

  ngOnInit(): void {}

  changeSize(value: string) {
    console.log('shell', value);
    this.width = value;
  }
}
