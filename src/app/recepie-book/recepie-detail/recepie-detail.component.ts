import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping-list/shopping-list.service';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recepie!:Recepie;
  id!:number;

  constructor(private shoppingService:ShoppingService,
    private route: ActivatedRoute,
    private recepieService: RecepieService,
    private router:Router){ }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recepie=this.recepieService.getRecepie(this.id); 
    })
  }
  addToShoppingList(){
    this.shoppingService.addIngredients(this.recepie.ingredients)

  }

  onEditRecepie(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteRecepie() {
    this.recepieService.deleteRecipe(this.id);
    this.router.navigate(['/recepies']);
  }

}
