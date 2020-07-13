import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

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

  output = '';
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


  calulateTotalUses(): number {
    return Math.floor(this.getTotalPP() / Number(this.skillCost));
  }

  calculateNeeded(): number {
    return Number(this.skillCost) - (this.getTotalPP() % Number(this.skillCost));
  }
  update(): void {
    console.log('Hello, you clicked me');
    console.log(this.getTotalPP());
    this.output = 'Your Total PP is:' + this.getTotalPP().toString() + '\n' +
                  'Number of uses is:' + this.calulateTotalUses().toString() + '\n' +
                  'Needed to use again is:' + this.calculateNeeded().toString();
                  
  }

  ngOnInit(): void {
  }

}
