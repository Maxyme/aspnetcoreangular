import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})

export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private TodoService: TodoService) { }

  ngOnInit() {
  }

  // getTodo(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.TodoService.getTodo(id).subscribe(todo => this.todo = todo);
  // }

  // goBack(): void {
  //   this.location.back();
  // }

 save(): void {
    this.TodoService.updateTodo(this.todo).subscribe();
  }

}
