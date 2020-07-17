import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from "./bugTracker/bugTracker.component";
import { BugStatsComponent } from "./bugTracker/views/bugStats.component";
import { BugEditComponent, BugEditComponent } from "./bugTracker/views/bugEdit.component";

import { BugOperationsService } from "./bugTracker/services/bugOperations.service";
import { SortService } from "./bugTracker/services/sort.service";

import { TrimTextPipe } from "./bugTracker/pipes/trimText.pipe";
import { SortPipe } from "./bugTracker/pipes/sort.pipe";
import { ClosedCountPipe } from "./bugTracker/pipes/closedCount.pipe";

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe
    , TrimTextPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
    , SortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
