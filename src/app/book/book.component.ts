import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  name: string = '';
  title: string = '';
  description: string = '';
  date: string = '';

  constructor(public todo: TodoService) {}

  submitTodo(event: Event) {
    // this.todo.addToDo(this.title, this.description, this.date);

    if (
      this.title.length != 0 &&
      this.description.length != 0 &&
      this.date.length != 0
    ) {
      this.todo.postTodoData(
        this.name,
        this.title,
        this.description,
        this.date
      );
      this.todo.fetchData();
      this.date = '';
      this.title = '';
      this.description = '';
    } else {
      alert('please fill all the details');
    }
  }
}
