import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  

  recepies!: Recepie[];
  constructor(private recepieService:RecepieService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recepies=this.recepieService.getRecepies();
  }

  onNewRecepie(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  

}
