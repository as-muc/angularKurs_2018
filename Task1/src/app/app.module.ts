import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseOverComponent } from './mouse-over/mouse-over.component';
import { TitleBoxComponent } from './title-box/title-box.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseOverComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
