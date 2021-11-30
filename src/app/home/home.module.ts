import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoEditViewComponent } from './todo-edit/todo-edit-view/todo-edit-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemViewComponent } from './todo-list/todo-item-view/todo-item-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input"
@NgModule({
  declarations: [
    HomeComponent,
    TodoEditComponent,
    TodoEditViewComponent,
    TodoListComponent,
    TodoItemViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers:[TodoService]
})
export class HomeModule { }
