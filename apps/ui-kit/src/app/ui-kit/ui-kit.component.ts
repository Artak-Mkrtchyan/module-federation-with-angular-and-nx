import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'micronx-ui-kit',
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss'],
})
export class UiKitComponent implements OnInit {
  width = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  changeSize(value: string) {
    this.width = value;
  }
}
