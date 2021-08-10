import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandOneComponent } from './brand-one.component';

describe('BrandOneComponentComponent', () => {
  let component: BrandOneComponent;
  let fixture: ComponentFixture<BrandOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
