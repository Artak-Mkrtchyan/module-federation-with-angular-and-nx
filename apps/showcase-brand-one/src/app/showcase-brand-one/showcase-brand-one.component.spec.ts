import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseBrandOneComponent } from './showcase-brand-one.component';

describe('ShowcaseBrandOneComponentComponent', () => {
  let component: ShowcaseBrandOneComponent;
  let fixture: ComponentFixture<ShowcaseBrandOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseBrandOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseBrandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
