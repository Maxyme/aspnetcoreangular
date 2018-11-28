import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient) { }

  private todosUrl = 'http://localhost:5000/api/todo';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl, httpOptions);
  }

  getTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url, httpOptions);
  }

  addTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  deleteTodo (todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  updateTodo (todo: Todo): Observable<any> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
