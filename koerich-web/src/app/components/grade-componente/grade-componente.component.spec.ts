import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeComponenteComponent } from './grade-componente.component';

describe('GradeComponenteComponent', () => {
  let component: GradeComponenteComponent;
  let fixture: ComponentFixture<GradeComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
