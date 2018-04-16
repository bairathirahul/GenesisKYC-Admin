import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCustomerswComponent } from './pending-customersw.component';

describe('PendingCustomerswComponent', () => {
  let component: PendingCustomerswComponent;
  let fixture: ComponentFixture<PendingCustomerswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCustomerswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCustomerswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
