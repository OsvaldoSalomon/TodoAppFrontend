import { Component, OnInit } from '@angular/core';
import { TodoDataService } from "../services/data/todo-data.service";
import { Todo } from "../list-todos/list-todos.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('Osvaldo', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if (this.id == -1) {
      // Create todos
      this.todoService.createTodo('Osvaldo', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.todoService.updateTodo('Osvaldo', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }

  }

}
