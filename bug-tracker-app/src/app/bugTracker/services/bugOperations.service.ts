import { Bug } from "../models/Bug";

export class BugOperationsService{
    private prevBugId: number = 0;
    createNew(bugName : string) : Bug{
        const newBug: Bug = {
            id: ++this.prevBugId,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        return newBug;
    }
    toggle(bugToToggle : Bug) : void {
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}