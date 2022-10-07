import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComponenteComponent } from './tabela-componente.component';

describe('TabelaComponenteComponent', () => {
  let component: TabelaComponenteComponent;
  let fixture: ComponentFixture<TabelaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
