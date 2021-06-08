import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  providers: [RecepieService],
  
})
export class RecepieBookComponent implements OnInit{
  title = 'Hello World!';
  selectedRecepie!: Recepie;

  constructor(private recepieService: RecepieService){}

  ngOnInit(){
   
  }


}
