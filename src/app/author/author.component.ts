import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  //templateUrl: './author.component.html',
  template: `
  <h2>{{ "Title: " + title + " Using Function: " + getTitle() }}</h2> 
  <ul>
      <li *ngFor="let author of authors">
          {{ author }}
      </li>
  </ul>

`,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = 'Authors';
  authors;

  constructor(service : AuthorService) {
      this.authors = service.getServices();
   }

   getTitle() {
     return this.authors.length + this.title;
   }

  ngOnInit() {
  }

}
