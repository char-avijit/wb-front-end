import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from "../../environments/environment";
import {ProjectsEndpoints} from "./projects.endpoints";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(environment.apiUrl + ProjectsEndpoints.GET_PROJECTS);
  }

  getProjectDetails(id: string): Observable<any> {
    return this.http.get(environment.apiUrl + ProjectsEndpoints.GET_PROJECT_DETAILS + id);
  }
}
