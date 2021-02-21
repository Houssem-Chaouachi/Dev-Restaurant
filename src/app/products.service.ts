import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Array<Menu> = ([  
    { img: 'joseph-gonzalez-zcUgjyqEwe8-unsplash.png', 
    productName: 'Banana & Blueberry French Toast ', 
    productPrice: 50,
     productDesc: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.'
     },  

    { img: 'Hamburger.png', 
    productName: 'CHEESE BURGER', 
    productPrice: 39,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  
    { img: 'pizza.png', 
    productName: 'PIZZA', 
    productPrice: 30,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  
    { img: 'sandwitch.png', 
    productName: 'Sandwitch', 
    productPrice: 20,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  
    { img: 'ice-cream.png', 
    productName: 'IceCream', 
    productPrice: 35,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  
    { img: 'hot-dog.png', 
    productName: 'Hot dog', 
    productPrice: 59,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  
    { img: 'cheeseBurger.png', 
    productName: 'Cheese Burger', 
    productPrice: 49,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  
    { img: 'salad.png', 
    productName: 'salad', 
    productPrice: 50,
     productDesc: 'Loren ipsum dolor sit amet, consectetur adipiscing elit fuidhir' 
    },  

   
  
  ])  
  constructor() { }
  get(){
    return this.productList
  }
}
