
import { Pipe, PipeTransform } from "@angular/core";
import { SortService } from "../services/sort.service";

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform {

    constructor(private sortService : SortService){

    }
    
    transform(data : any[], attrName : string, isDescending : boolean = false) : any[] {
        if (!data || !data.length || !attrName) return data;
        return this.sortService.sort(data, attrName, isDescending);
    }
}