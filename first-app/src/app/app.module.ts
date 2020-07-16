import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from "./calculator/calculator2.component";
import { CalculatorModel } from "./calculator/CalculatorModel";
import { CalculatorResultComponent } from "./calculator/calculatorResult.component";
import { ProductsComponent } from "./products/products.component";

/* 
  declarations - all UI entities (components, pipes, directives) 
  providers - services 
  imports - other dependent modules
*/

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component,
    CalculatorResultComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CalculatorModel
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
