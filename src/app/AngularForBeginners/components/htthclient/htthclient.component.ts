import { HttpClient, HttpParams } from '@angular/common/http';
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
    const params=new HttpParams()
                    .set("page","1")
                    .set("pageSize","10");
    this.http.get('http://192.173.163.190:8091/api/Countries',{params}).subscribe(val=>this.data=val);
  }
}
