
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn:'root'})

export class ShoppingService{
    // private ingredients: Ingredient[]=[
    //     new Ingredient("Onion",45),
    //     new Ingredient("Tomato",20),
    //   ];
    private ingredients = [];
    private ingredient = {};

    constructor(private http: HttpClient){}

    startedEditing=new Subject<string>();  
    
    getIngredients(){
        return this.ingredients.slice();
    }  

    getIngredient(index:string){
        this.http.get('http://localhost:3000/getIngredient/' + index).subscribe((res) => {
            console.log(res)
            this.ingredient = res;
        })
    }

    addIngredient(ingredient: any){
        this.http.post("http://localhost:3000/newShopping",ingredient).subscribe()
    
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        // this.ingredients[index] = newIngredient;
    }

    addIngredients(ingredients:Ingredient[]){
        // this.ingredients.push(...ingredients);
    }

    deleteIngredient(index:string){
        // this.ingredients.splice(index,1);
    }

}