import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
Dinner:boolean =true
Lunch:boolean = false
brunch:boolean = false
Desert:boolean = false
wine:boolean = false

menu?:any
  constructor( private service:ProductsService) { }

  ngOnInit(): void {
    this.menu= this.service.get()

  }

}
