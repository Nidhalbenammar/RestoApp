import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
<<<<<<< HEAD
  baseUrl='http://localhost:9092/api/chef/menus';
=======
  baseUrl='http://localhost:9092/menu';
>>>>>>> efe354ae6e74b1c35fd62856ccbade485bc15e87
  constructor(private http:HttpClient) { }

  getMenu(){
    return this.http.get(this.baseUrl);
  }

  getMenuById(id: any): Observable<Menu> {
    return this.http.get<Menu>(`${this.baseUrl}/${id}`);
  }

  addMenu(menu:any){
    return this.http.post(this.baseUrl,menu);
  }

  updateMenu(id: number, menu:any){
    return this.http.put(`${this.baseUrl}/${id}`, menu);
  }

  deleteMenu(id:any){
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
