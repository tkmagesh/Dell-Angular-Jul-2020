import { Component, OnInit } from '@angular/core';
import { CalculatorModel } from "./CalculatorModel";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers : [CalculatorModel]
})
export class CalculatorComponent implements OnInit {

/*   
  model : CalculatorModel = null;
  
  constructor(model : CalculatorModel) {
    this.model = model;
  } 
*/

   constructor(public model : CalculatorModel){

   }

  ngOnInit(): void {
  }
  
}
