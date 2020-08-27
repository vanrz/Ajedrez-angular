import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionComponent } from './comunicacion.component';

describe('ComunicacionComponent', () => {
  let component: ComunicacionComponent;
  let fixture: ComponentFixture<ComunicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
