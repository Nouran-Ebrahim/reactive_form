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
  delete(id: any){
    return this.http.delete(`${this.api}/${id}`)
  }
  update(id:any,old:any){
    return this.http.put(`${this.api}/${id}`,old)
    
  }
  getUserByid(id:any){
    return this.http.get(`${this.api}/${id}`)
  }
}
