import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total PP correctly', () => {
    component.base = '4';
    component.unit_1 = '2';
    component.unit_2 = '3';
    component.unit_3 = '1';
    expect(component.getTotalPP()).toEqual(10);
  });

  it('should calculate total uses correctly', () => {
    component.base = '5';
    component.skillCost = '2';
    expect(component.calulateTotalUses()).toEqual(2);
  });

  it('should calculate amount needed correctly', () => {
    component.base = '5';
    component.skillCost = '2';
    expect(component.calculateNeeded()).toEqual(1);
  });

});
