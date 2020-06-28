import { Component, OnInit } from '@angular/core';
import { TodoDataService } from "../services/data/todo-data.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [];

  message: string

  // [
  //   new Todo(1, 'Learn to play the piano', false, new Date()),
  //   new Todo(2, 'Read books', false, new Date()),
  //   new Todo(3, 'Make dinner', false, new Date()),
  //   // { id: 1, description: 'Learn to play the piano'},
  //   // { id: 2, description: 'Read books'},
  //   // { id: 3, description: 'Make dinner'},
  // ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to play the piano'
  // }

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Osvaldo').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo('Osvaldo', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
}


