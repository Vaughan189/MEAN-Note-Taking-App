import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-todos', component: AllTodosComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent },
  { path: 'update-todo/:id', component: UpdateTodoComponent },


  // { path: 'menu',
  //   redirectTo: './menu',
  //   pathMatch: 'full'
  // },
  // { path: 'login',
  // redirectTo: './login',
  // pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllTodosComponent,
    TodoDetailsComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
