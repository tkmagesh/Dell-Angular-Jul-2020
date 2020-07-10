import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* import * as calculator from './calc';
console.log(calculator); */

/* import * as calculator from './calc';
let add = calculator.add;
console.log(add(100,200)); */

/* import * as calculator from './calc';
let { add } = calculator;
console.log(add(1000, 2000)); */

/* import { add } from './calc';
console.log(add(1000, 2000)); */

//importing the default export
import calculator from './calc';
console.log(calculator)

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
