import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }
  api='http://localhost:3000/users'
  getData(){
    return this.http.get(this.api)
  }
  save(data:any){
    return this.http.post(`${this.api}`,data)
  }
  delete(name: any){
    return this.http.delete(`${this.api}/${name}`)
  }
  update(name:any,old:any){
    return this.http.put(`${this.api}/${name}`,old)
    
  }
  getUserByname(name:any){
    return this.http.get(`${this.api}/${name}`)
  }
}
