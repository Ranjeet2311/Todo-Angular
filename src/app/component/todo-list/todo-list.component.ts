import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  constructor(public todo: TodoService) {}

  newData = [];

  delete(item: string) {
    this.todo.updateAppointments(item);
  }

  ngOnInit(): void {
    this.todo.fetchData();
  }
}
