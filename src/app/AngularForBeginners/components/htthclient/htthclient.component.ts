import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../services/custom.service';
import { Observable } from 'rxjs';
import { Country } from '../../Models/country';

@Component({
  selector: 'app-htthclient',
  templateUrl: './htthclient.component.html',
  styleUrls: ['./htthclient.component.scss']
})
export class HTTHClientComponent implements OnInit{

  data:Observable<Country[]> | undefined;
  constructor(private customService:CustomService){

  }
  ngOnInit(): void {
    this.data=this.customService.loadData();
  }
}
