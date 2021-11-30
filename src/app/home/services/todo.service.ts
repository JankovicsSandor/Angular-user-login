import { NewTodoItem } from './../../models/new-todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todoList: NewTodoItem[] = [];

  constructor() { }

  get TodoList() {
    return this.todoList;
  }

  addNewTodoItem(newItem: NewTodoItem) {
    this.todoList.push(newItem);
  }
}
