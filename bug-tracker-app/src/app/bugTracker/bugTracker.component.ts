import { Component } from "@angular/core";
import { Bug } from "./models/Bug";

@Component({
    selector : 'app-bug-tracker',
    templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];
    private prevBugId: number = 0;
    
    onAddNewClick(newBugName : string){
        const newBug  : Bug = {
            id : ++this.prevBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugs.push(newBug);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    onBugNameClick(bug : Bug){
        bug.isClosed = !bug.isClosed;
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}