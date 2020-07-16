import { Component } from "@angular/core";
import { Bug } from "./models/Bug";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bug-tracker',
    templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];
    
    constructor(private bugOperations : BugOperationsService){
        
    }
    
    onAddNewClick(newBugName : string){
        const newBug = this.bugOperations.createNew(newBugName);
        this.bugs.push(newBug);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    onBugNameClick(bug : Bug){
        this.bugOperations.toggle(bug);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}