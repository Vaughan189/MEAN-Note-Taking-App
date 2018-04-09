import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo: any;
  content: any;
  title: any;

  constructor(public service: ApiService, private router: Router) { }

  ngOnInit() {
    // this.get_all_todos();

  }

  insert_todos() {
    if (!this.title || !this.content) {
      alert('Fill all the fields');
    }
    // tslint:disable-next-line:one-line
    else {
           this.service.insert(this.title, this.content).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
          res => {
            this.todo = res;
            console.log(this.todo);
      });
    }
  }

  todos() {
    this.router.navigate(['all-todos']);
  }


}
