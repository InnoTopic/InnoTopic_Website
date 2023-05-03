import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { WorkOrganisationsAndProjectsData } from '../work-projects-data';

@Component({
  selector: 'app-work-projects-section',
  templateUrl: './work-projects-section.component.html',
  styleUrls: ['./work-projects-section.component2.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkProjectsSectionComponent implements OnInit {

  organisationsAndProjects = WorkOrganisationsAndProjectsData.instance

  constructor() { }

  ngOnInit() {
  }

  keyValOrdered(input: any) {
    const retArray: any = []
    for ( const key of Object.keys(input) ) {
      retArray.push({
        key: key,
        value: (input as any)[key],
      })
    }
    return retArray
  }
}
