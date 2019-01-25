import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit() {
  }

  onAddTodo() {
    let todo;
    if (this.title !== '') {
      todo = { title: this.title, done: false };
    }
    this.addTodo.emit(todo);
    this.title = '';
  }

}
