import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrapuccinoComponent } from './frapuccino.component';

describe('FrapuccinoComponent', () => {
  let component: FrapuccinoComponent;
  let fixture: ComponentFixture<FrapuccinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrapuccinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrapuccinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
