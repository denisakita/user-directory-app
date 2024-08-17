import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User, UserResponse} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.API_HOST;

  constructor(private http: HttpClient) {
  }

  getUsers(params?: { name?: string; email?: string }): Observable<UserResponse> {
    let httpParams = new HttpParams();
    if (params?.name) {
      httpParams = httpParams.set('name', params.name);
    }
    if (params?.email) {
      httpParams = httpParams.set('email', params.email);
    }
    return this.http.get<UserResponse>(`${this.apiUrl}?results=10`, {params: httpParams});
  }


  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
