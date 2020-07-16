import { Component } from "@angular/core";

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html',
    styleUrls : ['./products.component.css']
})
export class ProductsComponent{
    productNames : string[] = ['Pen', 'Pencil', 'Marker', 'Scribble Pad'];

    onAddNewClick(newProductName : string){
        this.productNames.push(newProductName);
    }

    onRemoveClick(productName){
        this.productNames = this.productNames.filter(pn => pn !== productName);
    }
}