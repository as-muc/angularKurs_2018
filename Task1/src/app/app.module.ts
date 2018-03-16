import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseOverComponent } from './mouse-over/mouse-over.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './shared/book-data.service';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseOverComponent,
    TitleBoxComponent,
    BookListComponent,
    BookDetailComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    BookDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
