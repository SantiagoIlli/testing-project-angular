import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRodriComponent } from './button-rodri.component';

describe('ButtonRodriComponent', () => {
  let component: ButtonRodriComponent;
  let fixture: ComponentFixture<ButtonRodriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRodriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRodriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
