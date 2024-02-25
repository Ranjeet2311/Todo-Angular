import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { PopupComponent } from './component/popup/popup.component';

@NgModule({
  declarations: [AppComponent, BookComponent, TodoListComponent, PopupComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
