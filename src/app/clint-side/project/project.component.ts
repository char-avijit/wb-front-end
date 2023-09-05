import {Component, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductCardInput} from "../../shared/interfaces/common";
import {Currency} from "../../shared/enums";
import {Slick} from "ngx-slickjs";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  public projectSlug: string = '';

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.projectSlug = params["project-slug"];
    });
  }
  data: ProductCardInput = {
    image: 'assets/images/about.png',
    currency: Currency.AUD,
    price: 3000,
    title: 'this is a test title with log text and lets see what gonna happen',
    location: 'this is location'
  }
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
  ];

  activeImg = signal(this.slides[0].img)
  setActiveImg(img:string){
    console.log('sdfsd');
    this.activeImg.set(img)
  }
  slickConfigddd: Slick.Config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 640,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    draggable: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    mouseWheelMove: false,
    centerMode: false
  }

}
