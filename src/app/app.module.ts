import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieBookComponent } from './recepie-book/recepie.component';
import { RecepieDetailComponent } from './recepie-book/recepie-detail/recepie-detail.component';
import { RecepieListComponent } from './recepie-book/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie-book/recepie-list/recepie-item/recepie-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping-list.service';
import { RecepieStartComponent } from './recepie-book/recepie-start/recepie-start.component';
import { HttpClientModule } from '@angular/common/http';
import { RecepieEditComponent } from './recepie-book/recepie-edit/recepie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecepieBookComponent,
    RecepieDetailComponent,
    RecepieListComponent,
    RecepieItemComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective,
    RecepieStartComponent,
   
    RecepieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
