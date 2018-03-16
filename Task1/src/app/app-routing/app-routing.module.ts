import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router'
import { BookListComponent } from '../book-list/book-list.component';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';

const routes: Routes = [
                         {
                           path: 'info',
                           component: InfoBoxComponent
                         },
                         {
                           path: 'books',
                           component: BookListComponent
                         },
                         {
                          path: 'books/:isbn',
                          component: BookDetailComponent
                        },
                        {
                          path: '**',
                          pathMatch: 'full',
                          redirectTo: '/info'
                        },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
