import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoCargoComponent } from './evolucao-cargo.component';

describe('EvolucaoCargoComponent', () => {
  let component: EvolucaoCargoComponent;
  let fixture: ComponentFixture<EvolucaoCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucaoCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
