import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TestService } from '../test.service';


@Component({
  selector: 'app-create-task',
  templateUrl:'./create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  taskObj : Task = new Task();
  taskArr : Task[] = [];
  addTaskValue : string ='';
  editTaskValue : string='';
  constructor(private testService : TestService){  }

  ngOnInit(): void{
    this.addTaskValue='';
    this.editTaskValue='';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks()
  }
  getAllTasks(){
    this.testService.getAllTask().subscribe(res=>{
      console.log(res);
      this.taskArr = res;
    })
  }
  addTask(){
    this.taskObj.task_name = this.addTaskValue;
    this.testService.addTask(this.taskObj).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
      this.addTaskValue='';
    })
  }

  editTask(){
    this.taskObj.task_name=this.editTaskValue
    this.testService.editTask(this.taskObj).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    })
  }
  delTask(tasks : Task){
    this.testService.deleteTask(tasks).subscribe(res=>{
      console.log(res);
      this.ngOnInit();
    })

  }
  edit(tasks : Task){
    this.taskObj = tasks;
    this.editTaskValue = tasks.task_name;
  }

}
