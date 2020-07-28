import { Component, OnInit, OnDestroy } from "@angular/core";
import { Bug } from "./models/Bug";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bug-tracker',
    templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit, OnDestroy{
    bugs : Bug[] = [];

    sortAttr : string = '';
    sortDesc : boolean = false;

    
    
    constructor(private bugOperations : BugOperationsService){
        
    }

    ngOnInit(){
       this.loadBugs();
    }

    private loadBugs(){
        this.bugs = this.bugOperations.getAll();
    }

    ngOnDestroy(){

    }
    
    onNewBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    onRemoveClosedClick(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.bugOperations.remove(closedBug));
        this.loadBugs();
    }

}