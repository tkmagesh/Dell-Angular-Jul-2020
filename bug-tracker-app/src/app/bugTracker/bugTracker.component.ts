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
        this.bugs.push({ id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date('10-Mar-2013')});
        this.bugs.push({ id: 3, name: 'User actions not recognized', isClosed: true, createdAt: new Date('10-Mar-2014') });
        this.bugs.push({ id: 5, name: 'Application not responding', isClosed: true, createdAt: new Date('10-Mar-2017') });
        this.bugs.push({ id: 2, name: 'Data integrity checks failed', isClosed: false, createdAt: new Date('10-Mar-2015') });
    }

    ngOnDestroy(){

    }
    
    onNewBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
    }

}