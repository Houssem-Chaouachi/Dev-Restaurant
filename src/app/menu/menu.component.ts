import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
