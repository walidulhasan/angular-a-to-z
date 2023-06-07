import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../../Models/courses';

@Component({
  selector: 'app-inputs-andthe-input-decorator',
  templateUrl: './inputs-andthe-input-decorator.component.html',
  styleUrls: ['./inputs-andthe-input-decorator.component.scss']
})
export class InputsAndtheInputDecoratorComponent {
  @Input('courses')

  courses:Courses | undefined;

  @Output('courseSelected')

  courseSelected =new EventEmitter<Courses>();
  objIsShow:boolean=false;
  customEventChk:boolean=true;

  inputDecoratorChk:boolean=false;

  onCrouseView=()=>{
    this.objIsShow=!this.objIsShow
    this.courseSelected.emit(this.courses);
  }

  customEvent=()=>{
   this.customEventChk=!this.customEventChk

  }

  inputDecorator=()=>{
    this.inputDecoratorChk=!this.inputDecoratorChk;

  }
}
