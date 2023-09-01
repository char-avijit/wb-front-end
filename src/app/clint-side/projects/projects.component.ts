import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {ProductCardInput} from "../../shared/interfaces/common";
import {Currency} from "../../shared/enums";
import {ComponentsModule} from "../../shared/components/components.module";
import {NgForOf} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [MatTabsModule, ComponentsModule, NgForOf],
})
export class ProjectsComponent implements OnInit  {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private metaService: Meta) {
  }
  ngOnInit() {
    this.titleService.setTitle("sdfsdf")

   /* if (data.descrption) {
      this.metaService.updateTag({ name: 'description', content: data.descrption })
    } else {
      this.metaService.removeTag("name='description'")
    }

    if (data.robots) {
      this.metaService.updateTag({ name: 'robots', content: data.robots })
    } else {
      this.metaService.updateTag({ name: 'robots', content: "follow,index" })
    }

    if (data.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
    } else {
      this.metaService.updateTag({ property: 'og:url', content: this.router.url })
    }

    if (data.ogTitle) {
      this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
    } else {
      this.metaService.removeTag("property='og:title'")
    }

    if (data.ogDescription) {
      this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
    } else {
      this.metaService.removeTag("property='og:description'")
    }

    if (data.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
    } else {
      this.metaService.removeTag("property='og:image'")
    }*/

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


}

