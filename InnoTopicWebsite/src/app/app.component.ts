import { Component } from '@angular/core';
import { config } from './config';

import { HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  config = config;

  title = 'InnoTopic.com';

  toggleControl = new FormControl(false);

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const bodyTag = document.body;
      bodyTag.classList.toggle('dark-theme');
    });
  }



}
