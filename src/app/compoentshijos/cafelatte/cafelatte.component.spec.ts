import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafelatteComponent } from './cafelatte.component';

describe('CafelatteComponent', () => {
  let component: CafelatteComponent;
  let fixture: ComponentFixture<CafelatteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafelatteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafelatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
