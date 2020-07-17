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