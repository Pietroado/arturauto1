import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaricareAutoService {

  
  

  constructor(private http: HttpClient) { }

  insertCar(url: string, body: {}){
    return this.http.post(url,body)
  }

  getCar(url: string){
    return this.http.get(url)}
  }
