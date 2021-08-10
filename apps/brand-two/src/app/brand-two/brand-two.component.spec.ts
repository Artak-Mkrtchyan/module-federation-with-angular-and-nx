import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTwoComponent } from './brand-two.component';

describe('BrandComponentComponent', () => {
  let component: BrandTwoComponent;
  let fixture: ComponentFixture<BrandTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
