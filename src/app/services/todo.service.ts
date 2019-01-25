import { Injectable } from '@angular/core';
import { TodoInterface } from '../interfaces/todo-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  private limitter = `?_limit=10`;
  private serverUrl = `https://jsonplaceholder.typicode.com/todos`;


  // todos: TodoInterface[] = [
  //   { id: 1, title: 'Todo 1', done: false },
  //   { id: 2, title: 'Todo 2', done: true },
  //   { id: 3, title: 'Todo 3', done: false },
  //   { id: 4, title: 'Todo 4', done: true },
  //   { id: 5, title: 'Todo 5', done: false }
  //
  // ];


  constructor(private http: HttpClient) { }

  addNewTodo(todo): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(`${this.serverUrl}`, todo, this.headers);
  }

  getAllTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(`${this.serverUrl}${this.limitter}`);
  }

  toggleDone(todo: TodoInterface): Observable<any> {
    return this.http.put(`${this.serverUrl}/${todo.id}`, todo, this.headers);
  }

  deleteTodo(todo) {
    return this.http.delete(`${this.serverUrl}/${todo.id}`, this.headers);
  }
}
