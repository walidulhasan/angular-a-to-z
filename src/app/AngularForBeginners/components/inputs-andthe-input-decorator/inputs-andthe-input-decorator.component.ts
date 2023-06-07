import { Component, Input } from '@angular/core';
import { Courses } from '../../Models/courses';

@Component({
  selector: 'app-inputs-andthe-input-decorator',
  templateUrl: './inputs-andthe-input-decorator.component.html',
  styleUrls: ['./inputs-andthe-input-decorator.component.scss']
})
export class InputsAndtheInputDecoratorComponent {
  @Input()courses:Courses | undefined;
}
