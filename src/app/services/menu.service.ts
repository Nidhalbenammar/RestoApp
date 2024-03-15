import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from '../plat';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl='http://localhost:9091/plats';
  constructor(private http:HttpClient) { }

  getMenu(){
    return this.http.get(this.baseUrl);
  }

  getMenuById(id: any): Observable<Plat> {
    return this.http.get<Plat>(`${this.baseUrl}/${id}`);
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
