import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private course:string[]=[
    'Angular','Java','Core-java','Advance-java','Spring-Boot',
  'HTML','CSS'];
  constructor() {

   }
   getCourse(){
    return(this.course)
   }
}
