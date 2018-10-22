import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoPatrimonioComponent } from './evolucao-patrimonio.component';

describe('EvolucaoPatrimonioComponent', () => {
  let component: EvolucaoPatrimonioComponent;
  let fixture: ComponentFixture<EvolucaoPatrimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucaoPatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
