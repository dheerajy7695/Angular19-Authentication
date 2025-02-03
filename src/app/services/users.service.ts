import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  private apiUrl = "https://api.escuelajs.co/api/v1/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, data);
  }

  updateUser(data: any, id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
