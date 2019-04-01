import {
  Component,
  OnInit,
} from '@angular/core';
import {
  experienceAigRap,
  workExperience,
} from './work-experience-data';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  experience = workExperience
  experienceAigRap = experienceAigRap

  constructor() { }

  ngOnInit() {
  }

}
