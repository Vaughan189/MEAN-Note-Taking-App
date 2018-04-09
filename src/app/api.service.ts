import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class ApiService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:3000/notes';

  constructor(public http: Http) {
   }


   getAll() {
    return this.http.get(this.baseUrl)
      .map((res: Response) => res.json());
  }

  insert(title: any, content: any) {
    // return this.http.post(this.baseUrl + '?title=' + title + '&content=' + content )
    //   .map((res: Response) => res.json());
    const Insert_Params = new URLSearchParams();
    Insert_Params.append('title', title);
    Insert_Params.append('content', content);
    console.log(Insert_Params);
    return this.http.post(this.baseUrl, Insert_Params).map((res: Response) => res);
  }

  get(id: any) {
    return this.http.get(this.baseUrl + '/' + id).map((res: Response) => res.json());
      }


  delete(id: any) {
    // const Delete_Params = new URLSearchParams();
    //   Delete_Params.append('id', id);
      // Delete_Params.append('password', password);
      return this.http.delete(this.baseUrl + '/' + id).map((res: Response) => res.json());
  }


  update(id: any, title: any, content: any) {
    const Update_Params = new URLSearchParams();
    Update_Params.append('title', title);
    Update_Params.append('content', content);
    return this.http.put(this.baseUrl + '/' + id, Update_Params).map((res: Response) => res);
  }

}
