import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoInterface} from '../../interfaces/todo-interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoInterface;
  @Output() deleteTodoItem: EventEmitter<TodoInterface> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      done: this.todoItem.done
    };
    return classes;
  }

  onToggle(todo: TodoInterface) {
    console.log(`toggle ${todo.title}`);
    todo.done = !todo.done;  // update the UI
    this.todoService.toggleDone(todo).subscribe(data => console.log(data));  // update the backend
  }

  onDelete(todo) {
    console.log(`delete ${todo.title}`);
    this.deleteTodoItem.emit(todo);
  }

}
