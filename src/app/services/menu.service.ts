import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl='http://localhost:9091/plats';
  constructor(private http:HttpClient) { }

  getMenu(){
    return this.http.get(this.baseUrl);
  }

  getMenuById(id:any){
    return this.http.get(this.baseUrl+"/"+id);
  }

  addMenu(menu:any){
    return this.http.post(this.baseUrl,menu);
  }

  updateMenu(menu:any){
    return this.http.post(this.baseUrl,menu)
  }

  deleteMenu(id:any){
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
