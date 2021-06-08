
import { Ingredient } from "../shared/ingredient.model";
import { Recepie } from "./recepie.model";

export class RecepieService{
   
    recepies: Recepie[]= [
        new Recepie(
            "Chhole Bathure",
            "Very Famous Breakfast"
            ,"https://akm-img-a-in.tosshub.com/sites/pakwangali/images/stories/072015/chole_bhature_pakwan_520_070815033739.jpg",
            [
                new Ingredient("Maida",1),
                new Ingredient("chhole",2),
            ]),
    
      ];
    
    getRecepies(){
        return this.recepies;
    }  
    getRecepie(index:number){
        return this.recepies[index];

    }

    addRecepie(recepie: Recepie) {
        this.recepies.push(recepie);
        
      }
    
    updateRecepie(index: number, newRecepie: Recepie) {
        this.recepies[index] = newRecepie;
        
      }

    deleteRecipe(index: number) {
        this.recepies.splice(index, 1);
        
      }  

}