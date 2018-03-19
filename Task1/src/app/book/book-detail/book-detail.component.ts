import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';


@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  bookIsbn:string ;
  book$: Observable<Book>;
  book:Book;
  private subscrRoute:Subscription;
  private subscrBook:Subscription;
  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
    // this.bookIsbn = this.route.snapshot.params['isbn'];
    // this.book$ = this.bookDataService.getBookByIsbn(this.bookIsbn);
    // this.subscrBook = this.book$.pipe(/*beliebige operationen*/).subscribe(b => this.book = b);
    this.subscrRoute = this.route.params.subscribe((params: {isbn:string }) =>{
      this.subscrBook = this.bookDataService.getBookByIsbn(params.isbn)
               .pipe(/*beliebige operationen*/).subscribe(b => this.book = b)});


  }

  ngOnDestroy() {
    this.subscrBook.unsubscribe();
    this.subscrRoute.unsubscribe();
  }
}
