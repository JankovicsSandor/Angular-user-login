import { NewTodoItem } from './../../models/new-todo-item';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(private todoManager: TodoService) { }

  ngOnInit(): void {
  }

  addNewtodoItem(newItem: NewTodoItem) {
    this.todoManager.addNewTodoItem(newItem);
  }

}
