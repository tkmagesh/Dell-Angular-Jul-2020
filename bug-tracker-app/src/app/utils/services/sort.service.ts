interface Comparer {
    (p1: any, p2: any): number
}


export class SortService{
    private getDescComparer(comparer: Comparer): Comparer {
        return function compare(p1: any, p2: any): number {
            return comparer(p1, p2) * -1;
        }
    }

    private getComparer(attrName: string, isDescending: boolean = false): Comparer {
        const comparer = (p1: any, p2: any): number => {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] > p2[attrName]) return 1;
            return 0;
        };
        if (isDescending) return this.getDescComparer(comparer);
        return comparer;
    }

    public sort(data : any[], attrName : string, isDescending : boolean = false) : any[] {
        return data.sort(this.getComparer(attrName, isDescending));
    }


}