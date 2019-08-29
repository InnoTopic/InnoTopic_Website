import { Component, OnInit } from '@angular/core';
import { externalProfilesKarol } from './external-profiles-karol';

@Component({
  selector: 'app-external-profiles',
  templateUrl: './external-profiles.component.html',
  styleUrls: ['./external-profiles.component.sass']
})
export class ExternalProfilesComponent implements OnInit {

  otherProfiles = externalProfilesKarol

  constructor() { }

  ngOnInit() {
  }

}
