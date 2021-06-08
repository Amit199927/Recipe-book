import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  Subscription!: Subscription 
  editedItemIndex!: number;
  editMode=false;
  editedItem!:Ingredient;
  @ViewChild('f') slform!:NgForm
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.startedEditing.subscribe((index:number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem=this.shoppingService.getIngredient(index);
      this.slform.setValue({
        name:this.editedItem.name,
        amount: this.editedItem.amount,
      })



    })
  }

  onSubmit(form:NgForm){
    const value=form.value
    const newIngredient = new Ingredient(value.name,value.amount);
    
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
   
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
