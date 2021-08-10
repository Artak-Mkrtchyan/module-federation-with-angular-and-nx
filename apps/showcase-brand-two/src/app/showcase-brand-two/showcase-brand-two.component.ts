import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micronx-showcase-brand-two',
  templateUrl: './showcase-brand-two.component.html',
  styleUrls: ['./showcase-brand-two.component.scss'],
})
export class ShowcaseBrandTwoComponent implements OnInit {
  width = '';

  constructor() {}

  ngOnInit(): void {}

  changeSize(value: string) {
    this.width = value;
  }
}
