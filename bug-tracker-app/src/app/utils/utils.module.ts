import { NgModule } from '@angular/core';

import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortService } from "./services/sort.service";

@NgModule({
    declarations : [
        SortPipe,
        TrimTextPipe,
        ElapsedPipe
    ],
    providers : [
        SortService
    ], 
    imports : [],
    bootstrap : [],
    exports : [
        SortPipe
        , TrimTextPipe
        , ElapsedPipe
    ]
})
export class UtilsModule{

}