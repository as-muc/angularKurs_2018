import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


 form: FormGroup;
 isValidTitle: Boolean = false;
 isValidIsbn: Boolean = false;
 book: Book;
 

  ngOnInit() {
    this.form = this.fb.group({
      'title': ['neues Buch', Validators.required],
      'isbn':  ['neue ISBN  ',  Validators.compose([Validators.required, Validators.minLength(11)])],
    });
  }

}
