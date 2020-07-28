import { Bug } from "../models/Bug";
import { BugStorageService  } from "./bugStorage.service";
import { Injectable } from '@angular/core';

import { BugApiService } from "./bugApi.service";
import { Observable } from "rxjs";

@Injectable()
export class BugOperationsService {

    constructor(private bugApi: BugApiService) {

    }

    getAll(): Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    createNew(bugName: string): Observable<Bug> {
        const newBug: Bug = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle: Bug): Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bugToRemove: Bug): Observable<any> {
        return this.bugApi.remove(bugToRemove);
    }
}

/* @Injectable()
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
} */