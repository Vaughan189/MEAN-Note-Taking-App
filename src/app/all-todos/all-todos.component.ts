import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {
  all_todos: any;

  constructor(public service: ApiService, private router: Router) { }

  ngOnInit() {
    this.get_all_todos();
  }

  get_all_todos() {
      this.service.getAll().subscribe(
  // tslint:disable-next-line:no-shadowed-variable
      res => {
        this.all_todos = res;
        console.log(this.all_todos);
  });
}


todo_details(id) {
  console.log(id);
  this.router.navigate(['todo-details', id]);
}

}
