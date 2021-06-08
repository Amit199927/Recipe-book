
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    private ingredients: Ingredient[]=[
        new Ingredient("Onion",45),
        new Ingredient("Tomato",20),
      ];

    startedEditing=new Subject<number>();  
    
    getIngredients(){
        return this.ingredients;
    }  

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
    }

}