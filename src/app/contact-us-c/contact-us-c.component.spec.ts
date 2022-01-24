import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCComponent } from './contact-us-c.component';

describe('ContactUsCComponent', () => {
  let component: ContactUsCComponent;
  let fixture: ComponentFixture<ContactUsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
