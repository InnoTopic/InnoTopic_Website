import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { WorkOrganisationsAndProjectsData } from '../work-projects-data';

@Component({
  selector: 'app-work-projects-section',
  templateUrl: './work-projects-section.component.html',
  styleUrls: ['./work-projects-section.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkProjectsSectionComponent implements OnInit {

  organisationsAndProjects = WorkOrganisationsAndProjectsData.instance

  constructor() { }

  ngOnInit() {
  }

}
