import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDataService } from './shared/book-data.service';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule }  from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component'
@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookDataService,
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ]
})
export class BookModule { }
