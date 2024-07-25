import { Component, OnInit } from '@angular/core';
import { Language } from "../language-experience";
import { LanguageExperiences } from "../language-experience-data";

@Component({
  selector: 'app-language-section',
  templateUrl: './language-section.component.html',
  styleUrls: ['./language-section.component.scss'],
})
export class LanguageSectionComponent  implements OnInit {

  languageExperiences: Language[] = [];

  constructor() {}

  ngOnInit() {
    this.languageExperiences = LanguageExperiences;
  }

}
