import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosrecibidosComponent } from './pagosrecibidos.component';

describe('PagosrecibidosComponent', () => {
  let component: PagosrecibidosComponent;
  let fixture: ComponentFixture<PagosrecibidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosrecibidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosrecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
