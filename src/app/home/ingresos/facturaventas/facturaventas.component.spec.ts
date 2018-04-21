import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaventasComponent } from './facturaventas.component';

describe('FacturaventasComponent', () => {
  let component: FacturaventasComponent;
  let fixture: ComponentFixture<FacturaventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
