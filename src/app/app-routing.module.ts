import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CreateTaskComponent } from './create-task/create-task.component'; 

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children:
    [
    ]
  },
  {
    path: 'todo',
    component : ToDoComponent,
    children:
    [
      {
        path: 'createTask',
        component: CreateTaskComponent
      }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
