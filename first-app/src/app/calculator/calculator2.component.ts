import { Component } from "@angular/core";
import { CalculatorModel } from "./CalculatorModel";
@Component({
    selector : 'app-calculator-2', 
    templateUrl : './calculator2.component.html'
})
export class Calculator2Component{
    selectedOperator : string = '';
    model : CalculatorModel = new CalculatorModel();

    onCalculateClick(){
        if (this.selectedOperator !== '')
            this.model[this.selectedOperator]()
    }
}