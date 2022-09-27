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

    // DETECTAR SI EL USUARIO PREFIERE DARK MODE
    // LO SUYO SERÍA SERVIRLE DIRECTAMENTE EL WEBSITE EN LIGHT/DARK SEGÚN TENGA POR DEFECTO EN SU SO / NAVEGADOR
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches; // true
    console.log("prefiere dark mode")

  }



}
