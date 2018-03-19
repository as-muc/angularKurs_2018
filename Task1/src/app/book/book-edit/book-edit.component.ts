import { Component, OnInit } from '@angular/core';
import {  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookIsbn:string ;
  book$: Observable<Book>;
  book:Book;
  private subscrRoute:Subscription;
  private subscrBook:Subscription;

  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
  
  this.subscrRoute = this.route.params.subscribe((params: {isbn:string }) =>{
    this.subscrBook = this.bookDataService.getBookByIsbn(params.isbn)
             .pipe(/*beliebige operationen*/).subscribe(b => this.book = b)});
  }
  save(value){
    console.log("Meldung aus dem Formular:");
    console.log(value);
  }
}
