import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltraCandidatosComponent } from './filtra-candidatos.component';

describe('FiltraCandidatosComponent', () => {
  let component: FiltraCandidatosComponent;
  let fixture: ComponentFixture<FiltraCandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltraCandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltraCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
