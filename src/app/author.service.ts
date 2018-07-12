import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  authors;

  getServices() {
    this.authors = ['author1', 'author2', 'author3']
    return this.authors; 
  }

  getTotalAuthors() {
    return this.authors.length;
  }
  
  constructor() { }

}
