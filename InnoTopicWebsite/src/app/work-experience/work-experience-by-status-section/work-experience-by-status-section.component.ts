import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

/** status: mode / approach / intent(ions) */
@Component({
  selector: 'app-work-experience-by-status-section',
  templateUrl: './work-experience-by-status-section.component.html',
  styleUrls: ['./work-experience-by-status-section.component.sass']
})
export class WorkExperienceByStatusSectionComponent implements OnInit {

  @Input() experience

  constructor() { }

  ngOnInit() {
  }

}
