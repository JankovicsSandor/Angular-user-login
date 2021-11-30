import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTodoItem } from 'src/app/models/new-todo-item';

@Component({
  selector: 'app-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css']
})
export class TodoEditViewComponent implements OnInit {

  editForm: FormGroup;

  @Output() addNewTodo: EventEmitter<NewTodoItem> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      summary: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newTodo() {
    this.addNewTodo.emit(this.editForm.value);
    this.editForm.reset();
  }

  hasErrorOnControl(controlName: string) {
    return this.editForm.controls[controlName].invalid;
  }

}
