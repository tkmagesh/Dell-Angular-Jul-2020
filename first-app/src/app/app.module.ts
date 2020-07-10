import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

/* 
  declarations - all UI entities (components, pipes, directives) 
  providers - services 
  imports - other dependent modules
*/

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
