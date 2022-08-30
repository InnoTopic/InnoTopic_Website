import { Component, OnInit } from '@angular/core';
import { WorkOrganisationsAndProjects } from '../work-projects-data';

@Component({
  selector: 'app-work-projects-section',
  templateUrl: './work-projects-section.component.html',
  styleUrls: ['./work-projects-section.component.sass']
})
export class WorkProjectsSectionComponent implements OnInit {

  organisationsAndProjects = WorkOrganisationsAndProjects.instance

  constructor() { }

  ngOnInit() {
  }

}
