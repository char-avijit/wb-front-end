import {Component} from '@angular/core';
import {Currency} from "../../../shared/enums";
import {ProductCardInput} from "../../../shared/interfaces/common";
import {Slick} from "ngx-slickjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
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
  slickConfig: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    mouseWheelMove: false,
    centerMode: true
  }
}
