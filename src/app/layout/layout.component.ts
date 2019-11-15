import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "../shared/http-client.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  projects: any[];

  constructor(private service: HttpClientService) { }

  ngOnInit() {
    this.service.getProjects()
      .then((projects) => {
        this.projects = projects;
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  }

}
