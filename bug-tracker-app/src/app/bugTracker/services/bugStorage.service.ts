import { Bug } from "../models/Bug";

export class BugStorageService{

    //local resource, so we are able to use it synchronously
    private storage = window.localStorage;
    
    private prevBugId: number = 0;
    private keyPrefix = 'bug - ';

    private getPersistableKey(id : number): string {
        return `${this.keyPrefix}${id}`
    }
    private isPersistentKey(key : string){
        return key.startsWith(this.keyPrefix);
    }
    getAll() : Bug[]{
        let bugs : Bug[] = [];
        for(let i = 0, count = this.storage.length; i < count; i++){
            let key = this.storage.key(i);
            if (this.isPersistentKey(key)){
                let rawData = this.storage.getItem(key),
                    bug = JSON.parse(rawData);
                bugs.push(bug);
            }
        }
        return bugs;
    }

    save(bug : Bug) : Bug {
        bug.id = bug.id || ++this.prevBugId;
        this.storage.setItem(this.getPersistableKey(bug.id), JSON.stringify(bug));
        return bug;
    }

    remove(bug : Bug) : void {
        this.storage.removeItem(this.getPersistableKey(bug.id));
    }
}