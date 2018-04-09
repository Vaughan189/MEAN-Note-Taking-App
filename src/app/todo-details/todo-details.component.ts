import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  content: any;
  title: any;
  todo_details: any;
  todo_id: any;
  private sub: any;

  constructor(private _location: Location, private route: ActivatedRoute, public service: ApiService, private router: Router) { }

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


  update_todo_details() {
    this.router.navigate(['update-todo', this.todo_id]);
  }

  delete_todo() {
    this.service.delete(this.todo_id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
          res => {
            console.log(res);
            this._location.back();
            // this.router.navigate(['all-todos']);
            // location.reload();
         });
  }

}
