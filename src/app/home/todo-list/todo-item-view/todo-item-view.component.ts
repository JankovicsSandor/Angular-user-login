import { NewTodoItem } from './../../../models/new-todo-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item-view',
  templateUrl: './todo-item-view.component.html',
  styleUrls: ['./todo-item-view.component.css']
})
export class TodoItemViewComponent implements OnInit {

  @Input() todoItem: NewTodoItem = new NewTodoItem();
  constructor() { }

  ngOnInit(): void {
  }

}
