import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
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
  editedItemIndex!: string;
  editMode=false
  editedItem!:Ingredient;
  ingredient:any;
  @ViewChild('f') slform!:NgForm
  constructor(private shoppingService:ShoppingService, private http: HttpClient) { }

 

  ngOnInit(): void {
    this.shoppingService.startedEditing.subscribe((index:string)=>{
      this.editedItemIndex=index;
      console.log(index);
      this.editMode=true;
      // this.editedItem=this.shoppingService.getIngredient(index);
      // this.slform.setValue({
      //   name:this.editedItem.name,
      //   amount: this.editedItem.amount,
      this.http.get("https://localhost:3000/getShoppingById/"+index).subscribe(res=>{
        console.log(res)
        this.ingredient=res;
        this.slform.setValue({
          name:this.ingredient.name,
          amount:this.ingredient.amount
        })
      })
      })



    }
  

  onSubmit(form:NgForm){
    const value=form.value
    // const newIngredient = new Ingredient(value.name,value.amount);
    
    if (this.editMode) {
      // this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
      this.http.post("http://localhost:3000/editShopping/"+this.editedItemIndex,{name:value.name,amount:value.amount})
      .subscribe((res)=>{
        alert('Successfully Updated');
      })
    } else {
      // this.shoppingService.addIngredient(newIngredient);
      this.http.post("http://localhost:3000/newShopping",{name:value.name,amount:value.amount})
      .subscribe((res)=>{
        console.log(res);
      })
    }
    this.editMode = false;
    form.reset();
   
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
  }

  onDelete() {
    // this.shoppingService.deleteIngredient(this.editedItemIndex);


    console.log(this.editedItemIndex);
    this.http.post("http://localhost:3000/deleteShopping/"+ this.editedItemIndex,{})
    .subscribe((res)=>{
      alert("successfully deleted item");
    })
    this.onClear();
  }

}
