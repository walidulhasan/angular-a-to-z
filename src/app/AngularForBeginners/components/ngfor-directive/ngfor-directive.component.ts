import { Component } from '@angular/core';
import { Courses } from '../../Models/courses';
import { COURSES } from '../../db-data';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.scss']
})
export class NgforDirectiveComponent {
  data:Array<Courses>=COURSES
  
}
