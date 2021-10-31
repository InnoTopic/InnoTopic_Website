import { Component } from '@angular/core';
import { config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  config = config;

  title = 'InnoTopic.com';
}
