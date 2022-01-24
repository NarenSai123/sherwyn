import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersCComponent } from './careers-c.component';

describe('CareersCComponent', () => {
  let component: CareersCComponent;
  let fixture: ComponentFixture<CareersCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
