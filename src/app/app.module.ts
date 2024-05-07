import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { DemoComponent } from './demo/demo.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { ClssbindingComponent } from './eventBinding/eventBinding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import {FormsModule} from '@angular/forms';
import { IfDerivativeComponent } from './if-derivative/if-derivative.component';
import { ForDerectiveComponent } from './for-derective/for-derective.component';
import { Task5Component } from './task5/task5.component';
import { SwitchDerectiveComponent } from './switch-derective/switch-derective.component';
import { Task4Component } from './task4/task4.component';
import { Task9Component } from './task9/task9.component';
import { Task7Component } from './task7/task7.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent3Component } from './parent3/parent3.component';
import { SummaryPipe } from './summary.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { CourseComponent } from './course/course.component'
import { CourseService } from './course.service';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { DemofdcComponent } from './demofdc/demofdc.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    DemoComponent,
    PropertyBindingComponent,
    StylebindingComponent,
    FlipcartComponent,
    ClassBindingComponent,
    ClssbindingComponent,
    TwoWayDatabindingComponent,
    IfDerivativeComponent,
    ForDerectiveComponent,
    Task5Component,
    SwitchDerectiveComponent,
    Task4Component,
    Task9Component,
    Task7Component,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Child3Component,
    Parent3Component,
    SummaryPipe,
    CustompipeComponent,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyFollowerComponent,
    QueryParameterComponent,
    NotFoundComponent,
    LoginComponent,
    ProductComponent,
    DemofdcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
