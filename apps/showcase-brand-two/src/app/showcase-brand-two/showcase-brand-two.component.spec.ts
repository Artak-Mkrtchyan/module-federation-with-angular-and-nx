import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseBrandTwoComponent } from './showcase-brand-two.component';

describe('ShowcaseBrandTwoComponent', () => {
  let component: ShowcaseBrandTwoComponent;
  let fixture: ComponentFixture<ShowcaseBrandTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseBrandTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseBrandTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
