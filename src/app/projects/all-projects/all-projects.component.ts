import { Component } from '@angular/core';
import {ProjectsService} from "../projects.service";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent {
  projects: any;
  constructor(private projectService: ProjectsService) {
      this.getAllProducts()
  }

  getAllProducts() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res.results
      console.log(this.projects)
    })
  }
}
