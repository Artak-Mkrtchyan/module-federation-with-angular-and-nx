import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'micronx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  #window: Window;
  #document: Document;

  @Input() set width(width: string) {
    if (width) {
      this.button?.nativeElement.style.setProperty('width', width);
    }
  }

  @ViewChild('refButton') button?: ElementRef<HTMLButtonElement>;

  constructor(private windowService: WindowService) {
    this.#window = this.windowService.nativeWindow;
    this.#document = this.#window.document;
  }

  ngOnInit(): void {}
}
