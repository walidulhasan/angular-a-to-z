import { Component } from '@angular/core';
import { COURSES } from '../../db-data';
import { Courses } from '../../Models/courses';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {

  coreCourses:Courses=COURSES[0];

 data:any={
  title:'This is Angular For Beginners'
 }

 onLoadClicked=()=>{
  alert('Hello World!');
  console.log(this.coreCourses);
 }

 onKeyUp=(title:string)=>{
  this.data.title=title;
 }
}
