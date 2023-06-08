import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Models/country';


@Injectable({
  providedIn: 'root',
})
export class CustomService {

  constructor(private http: HttpClient) {
  }

  loadData():Observable<Country[]>{
    const params = new HttpParams().set('page', '1').set('pageSize', '10');
    return this.http
      .get<Country[]>('http://192.173.163.190:8091/api/Countries', { params })

  }
}
