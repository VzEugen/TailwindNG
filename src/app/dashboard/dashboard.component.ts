import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  productsData = [
    {title: 'Earthen Bottle', price: 48, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg', imgAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.'},
    {title: 'Nomad Tumbler', price: 35, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', imgAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'},
    {title: 'Focus Paper Refill', price: 89, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg', imgAlt: 'Person using a pen to cross a task off a productivity paper card.'},
    {title: 'Machined Mechanical Pencil', price: 35, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg', imgAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'},
    {title: 'Earthen Bottle', price: 48, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg', imgAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.'},
    {title: 'Nomad Tumbler', price: 35, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', imgAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'},
    {title: 'Focus Paper Refill', price: 89, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg', imgAlt: 'Person using a pen to cross a task off a productivity paper card.'},
    {title: 'Machined Mechanical Pencil', price: 35, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg', imgAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'},
    {title: 'Earthen Bottle', price: 48, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg', imgAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.'},
    {title: 'Nomad Tumbler', price: 35, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', imgAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'},
    {title: 'Focus Paper Refill', price: 89, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg', imgAlt: 'Person using a pen to cross a task off a productivity paper card.'},
    {title: 'Machined Mechanical Pencil', price: 35, imgUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg', imgAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'},
  ]

  ngOnInit(): void {
  }

}
