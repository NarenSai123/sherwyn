import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotterCComponent } from './fotter-c.component';

describe('FotterCComponent', () => {
  let component: FotterCComponent;
  let fixture: ComponentFixture<FotterCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotterCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotterCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
