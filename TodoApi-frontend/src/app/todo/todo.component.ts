import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  constructor(private TodoService: TodoService) { }

  todos: Todo[];
  selectedTodo: Todo;

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.TodoService.getTodos()
        .subscribe(todos => this.todos = todos);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.TodoService.addTodo({ name } as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(h => h !== todo);
    this.TodoService.deleteTodo(todo).subscribe();
  }

}
