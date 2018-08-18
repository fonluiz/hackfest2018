import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCandidatoComponent } from './perfil-candidato.component';

describe('PerfilCandidatoComponent', () => {
  let component: PerfilCandidatoComponent;
  let fixture: ComponentFixture<PerfilCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
