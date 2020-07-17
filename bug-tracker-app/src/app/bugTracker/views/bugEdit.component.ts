import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from '../models/Bug';
import { BugOperationsService } from "../services/bugOperations.service";

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" (input)="newBugName = $event.target.value">
            <span> [ {{100-newBugName.length}} ] </span>
            <input type="button" value="Add New" (click)="onAddNewClick()">
        </section>
    `
})
export class BugEditComponent{
    newBugName: string = '';

    @Output()
    bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService){

    }

    onAddNewClick() {
        const newBug = this.bugOperations.createNew(this.newBugName);
        this.bugCreated.emit(newBug);
    }
}