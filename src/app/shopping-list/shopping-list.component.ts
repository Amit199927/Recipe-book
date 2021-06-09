import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,DoCheck{
  ingredients: any; 
  constructor(private shoppingService:ShoppingService,private http: HttpClient) { }

  ngOnInit(): void {
    // this.ingredients=this.shoppingService.getIngredients();
    this.http.get("http://localhost:3000/getShopping").subscribe((res)=>{
      this.ingredients=res;
    })
  }

  ngDoCheck(){
    this.http.get("http://localhost:3000/getShopping").subscribe((res)=>{
    this.ingredients=res; 
  })
}

  onEdit(index:string){
    this.shoppingService.startedEditing.next(index);
  }


}
