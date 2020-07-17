import { NgModule } from '@angular/core';

import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

import { SortService } from "./services/sort.service";

@NgModule({
    declarations : [
        SortPipe,
        TrimTextPipe
    ],
    providers : [
        SortService
    ], 
    imports : [],
    bootstrap : [],
    exports : [
        SortPipe
        , TrimTextPipe
    ]
})
export class UtilsModule{

}