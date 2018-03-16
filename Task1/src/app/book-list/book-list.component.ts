import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  books: Book[];
  books$: Observable<Book[]>
  private subscr:Subscription;
  constructor(private bookDataService: BookDataService) {

  }

  ngOnInit() {
   //  this.books$ = this.bookDataService.getBooks('Des'); --> mit Filterung nach Zeichenfolge im Titel
     this.books$ = this.bookDataService.getBooks();
     this.subscr = this.books$.pipe(/*beliebige operationen*/).subscribe(b => this.books = b);
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
   }
 
}
