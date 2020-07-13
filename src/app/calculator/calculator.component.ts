import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  base = '';
  weapon = '';
  unit_1 = '';
  unit_2 = '';
  unit_3 = '';
  mainclass_1 = '';
  mainclass_2 = '';
  subclass_1 = '';
  subclass_2 = '';
  territory = '';
  bullet = '';
  skillCost = '';

  output = 0;
  constructor() { }

  getTotalPP(): number {

    return Number(this.base) +
    Number(this.weapon) +
    Number(this.unit_1) +
    Number(this.unit_2) +
    Number(this.unit_3) +
      Number(this.mainclass_1) +
        Number(this.mainclass_2) +
          Number(this.subclass_1) +
            Number(this.subclass_2);
  }

  caclulate(): void {
    console.log('Hello, you clicked me');
    console.log(this.getTotalPP());
    this.output = this.getTotalPP();
  }
  ngOnInit(): void {
  }

}
