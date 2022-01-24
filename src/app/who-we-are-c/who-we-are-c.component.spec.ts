import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreCComponent } from './who-we-are-c.component';

describe('WhoWeAreCComponent', () => {
  let component: WhoWeAreCComponent;
  let fixture: ComponentFixture<WhoWeAreCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
