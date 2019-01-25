import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo-interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodoInterface[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(data => {
      console.log(data);
      this.todos = data;
    });
  }

  addTodo(todo: TodoInterface) {
    this.todos.unshift(todo);  // update the UI
    this.todoService.addNewTodo(todo).subscribe(data => console.log(data));  // add new todo to the database
  }

  deleteTodo(todo: TodoInterface) {
    console.log(todo);
    this.todos = this.todos.filter(todoItem => todo.id !== todoItem.id);  // deletes todo from the UI
    this.todoService.deleteTodo(todo).subscribe(data => console.log(data));   // deletes todo from the server
  }

}
