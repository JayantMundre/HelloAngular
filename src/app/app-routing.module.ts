import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { Task7Component } from './task7/task7.component';
import { Task9Component } from './task9/task9.component';

const routes: Routes = [
  // {
  //   path:"",component:HomeComponent
  // },

  {
    path:"",component:Page1Component
  },
  {
    path:"Page2",component:Page2Component
  },
  {
    path:"Page3/:id/:username",component:Page3Component
  },
  {
    path:"Follower/:id",component:FollowerComponent
  },
  {
    path:"MyFollower",component:MyFollowerComponent
  },
  {
    path:"QueryParameter",component:QueryParameterComponent
  },
  {
    path:"Login",children:[
      {
        path:"",component:LoginComponent
      },
      {
        path:"Task1",component:Task1Component
      },
      {
        path:"Task2",component:Task2Component
      },
      {
        path:"Task3",component:Task3Component
      },
      {
        path:"Task4",component:Task4Component
      },
      {
        path:"Task5",component:Task5Component
      },
      {
        path:"Task7",component:Task7Component
      },
      {
        path:"Task9",component:Task9Component
      }
    ]
  },
  {
    path:"user",loadChildren:()=>import('./user/user.module').then((m)=>m.UserModule)
  },
  {
    path:"**",component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
