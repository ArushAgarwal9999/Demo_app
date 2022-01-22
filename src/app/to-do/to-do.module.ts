import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateToDoComponentComponent } from './create-to-do-component/create-to-do-component.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { DoneListComponentComponent } from './done-list-component/done-list-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';



@NgModule({
  declarations: [
    CreateToDoComponentComponent,
    ToDoListComponentComponent,
    DoneListComponentComponent,
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers:[
    TodoService
  ],
  bootstrap: [CreateToDoComponentComponent]
})
export class ToDoModule { }
