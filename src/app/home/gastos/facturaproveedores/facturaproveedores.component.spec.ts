import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaproveedoresComponent } from './facturaproveedores.component';

describe('FacturaproveedoresComponent', () => {
  let component: FacturaproveedoresComponent;
  let fixture: ComponentFixture<FacturaproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
