import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  insertForm(url: string, body: {}){
    return this.http.post(url,body)
  }

  getForm(url: string){
    return this.http.get(url)
  }

  deleteForm(url: string, id: string){
    return this.http.delete(`${url}/${id}.json `)
  }
}
