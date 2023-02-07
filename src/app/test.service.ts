import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from 'src/app/model/task'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks"
   }

   addTask(task : Task  ) {
    return this.http.post<Task>(this.serviceURL,task);
   }

   getAllTask() {
    return this.http.get<Task[]>(this.serviceURL);
   }

   deleteTask(task : Task  ) {
    return this.http.delete<Task>(this.serviceURL+ '/'+task.id);
   }

   editTask(task : Task  ) {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
   }
}
