import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // vendorsArray=[];
  // img_path='src/assets/';
  img_path='../../assets/';
  img_path2='../../assets/Sidebar/';

  star_length = [
    {src: 'favourites.svg'},
    {src: 'favourites.svg'},
    {src: 'favourites.svg'},
    {src: 'favourites.svg'},
    {src: 'favourites.svg'},
  ];
  starAllData=[
    {src: 'man-user.svg',cashback: '10% Cashback',distance:'0.5',name:'Sky Sports Shop'},
    {src: 'man-user.svg',cashback: '10% Cashback',distance:'0.5',name:'Sky Sports Shop'},
    {src: 'man-user.svg',cashback: '10% Cashback',distance:'0.5',name:'Sky Sports Shop'},
    {src: 'man-user.svg',cashback: '10% Cashback',distance:'0.5',name:'Sky Sports Shop'},
    {src: 'man-user.svg',cashback: '10% Cashback',distance:'0.5',name:'Sky Sports Shop'},
    {src: 'man-user.svg',cashback: '10% Cashback',distance:'0.5',name:'Sky Sports Shop'},
  ];

  images = [
    { img: "1402.jpg" },
    { img: "Banner.png" },
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };
  slides = [
    {'image': '1402.jpg'},
    {'image': 'Banner.png'},
    {'image': 'Asset 1.png'},
  ];

  ngOnInit(): void {

  }
  vendorsArray=[
    {name: 'Electronics',src:'camera.svg'},
    {name: 'Food & Snacks',src:'chicken.svg'},
    {name: 'Clothing',src:'jacket.svg'},
    {name: 'Travel & Tour',src:'air-freight.svg'},
    {name: 'Fitness',src:'barbell.svg'},
    {name: 'Medical',src:'first-aid-kit.svg'},
    {name: 'Grooming',src:'makeup.svg'},
  ];

}
