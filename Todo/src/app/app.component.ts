import { Component } from '@angular/core';
import Todo from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: Todo = new Todo();
  private index: number = 0;

  todos: Todo[] = [];

  addTodo(){
    this.newTodo.id = ++this.index;
    this.todos = [...this.todos, this.newTodo];
    this.newTodo = new Todo();
  }

  removeTodo(id: number){
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;
  }

  getNonCompletedToDo(){
    return this.todos.filter(todo => !todo.completed).length;
  }
}
