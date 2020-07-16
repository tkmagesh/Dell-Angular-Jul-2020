import { Component } from "@angular/core";
import { CalculatorModel } from "./CalculatorModel";
@Component({
    selector : 'app-calculator-2', 
    templateUrl : './calculator2.component.html',
    providers: [CalculatorModel]
})
export class Calculator2Component{
    selectedOperator : string = '';
    
    constructor(public model : CalculatorModel){

    }

    onCalculateClick(){
        if (this.selectedOperator !== '')
            this.model[this.selectedOperator]()
    }
}