import { Component } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
 data:any={
  title:'This is Angular For Beginners'
 }

 onLoadClicked=()=>{
  alert('Hello World!');
 }

 onKeyUp=(title:string)=>{
  this.data.title=title;
 }
}
