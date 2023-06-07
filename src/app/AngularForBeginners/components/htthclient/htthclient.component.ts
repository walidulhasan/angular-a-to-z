import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htthclient',
  templateUrl: './htthclient.component.html',
  styleUrls: ['./htthclient.component.scss']
})
export class HTTHClientComponent implements OnInit{

  data:any
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get('http://192.173.163.190:8091/api/Countries').subscribe(val=>this.data=val);
  }
}
