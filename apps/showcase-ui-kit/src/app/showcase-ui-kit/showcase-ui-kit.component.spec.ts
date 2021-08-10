import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseUiKitComponent } from './showcase-ui-kit.component';

describe('ShowcaseUiKitComponentComponent', () => {
  let component: ShowcaseUiKitComponent;
  let fixture: ComponentFixture<ShowcaseUiKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseUiKitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
