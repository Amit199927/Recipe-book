import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepieDetailComponent } from './recepie-book/recepie-detail/recepie-detail.component';
import { RecepieEditComponent } from './recepie-book/recepie-edit/recepie-edit.component';
import { RecepieStartComponent } from './recepie-book/recepie-start/recepie-start.component';
import { RecepieBookComponent } from './recepie-book/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/recepies',pathMatch:'full'},
  {path:'recepies',component:RecepieBookComponent,children:[
    {path:'',component:RecepieStartComponent},
    {path:'new',component:RecepieEditComponent},
    {path:':id',component:RecepieDetailComponent},    
    {path:':id/edit',component:RecepieEditComponent}
  ]},
  {path:'shopping-list',component:ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
