import { Component, OnInit } from '@angular/core';
import {booksData} from "./books.data";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent  implements OnInit {

  books = booksData

  constructor() { }

  ngOnInit() {}

}
