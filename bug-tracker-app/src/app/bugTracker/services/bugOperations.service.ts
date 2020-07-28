import { Bug } from "../models/Bug";
import { BugStorageService  } from "./bugStorage.service";
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService{
    
    constructor(private bugStorage: BugStorageService){

    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }

    createNew(bugName : string) : Bug{
        const newBug: Bug = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugStorage.save(newBug);
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugStorage.save(toggledBug);
    }

    remove(bugToRemove : Bug) : void {
        this.bugStorage.remove(bugToRemove);
    }
}