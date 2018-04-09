import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  todo: any;
  content: any;
  title: any;
  todo_details: any;
  todo_id: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private _location: Location, public service: ApiService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.todo_id = params['id'];
      // console.log(this.todo_id);
      this.get_todo_details(this.todo_id);
   });
  }


  get_todo_details(id) {
    this.service.get(id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
          res => {
            this.todo_details = res;
            this.title = this.todo_details.title;
            this.content = this.todo_details.content;
   });
  }

  update_todos() {

    if (!this.title || !this.content) {
      alert('Please Enter all the fields');
    }
    // tslint:disable-next-line:one-line
    else {
      this.service.update(this.todo_id, this.title, this.content).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
                res => {
                  this.todo = res;
                  console.log(this.todo);
                  this._location.back();
        });
    }
  }

}
