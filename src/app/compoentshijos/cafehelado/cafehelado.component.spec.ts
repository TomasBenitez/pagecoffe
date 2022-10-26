import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeheladoComponent } from './cafehelado.component';

describe('CafeheladoComponent', () => {
  let component: CafeheladoComponent;
  let fixture: ComponentFixture<CafeheladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeheladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
