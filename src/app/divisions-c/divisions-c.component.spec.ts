import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsCComponent } from './divisions-c.component';

describe('DivisionsCComponent', () => {
  let component: DivisionsCComponent;
  let fixture: ComponentFixture<DivisionsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
