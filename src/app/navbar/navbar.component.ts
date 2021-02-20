import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToHome(): void {
  document.getElementById('home')?.scrollIntoView({block: 'start', behavior: 'smooth'});
}
toAboutUs(): void {
  document.getElementById('aboutUs')?.scrollIntoView({block: 'center', behavior: 'smooth'});
}
toMenu(): void {
  // document.getElementById('menu').scrollIntoView({block: 'center', behavior: 'smooth' });
  document.getElementById('menu')?.scrollIntoView({block:'center', behavior:'smooth'})
}
}
