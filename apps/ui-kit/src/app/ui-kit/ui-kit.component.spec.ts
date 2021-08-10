import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitComponentComponent } from './ui-kit-component.component';

describe('UiKitComponentComponent', () => {
  let component: UiKitComponentComponent;
  let fixture: ComponentFixture<UiKitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiKitComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
