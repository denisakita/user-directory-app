import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {UserModel, UserResponseModel} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.API_HOST;
  private cachedUsers: UserModel[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers(params?: { name?: string; email?: string }): Observable<UserResponseModel> {
    let httpParams = new HttpParams();
    if (params?.name) {
      httpParams = httpParams.set('name', params.name);
    }
    if (params?.email) {
      httpParams = httpParams.set('email', params.email);
    }
    return this.http.get<UserResponseModel>(`${this.apiUrl}?results=10`, {params: httpParams}).pipe(
      tap(response => this.cachedUsers = response.results) // Cache users
    );
  }


  getUserById(id: string): Observable<UserModel | null> {
    if (this.cachedUsers.length === 0) {
      return this.getUsers().pipe(
        map(response => this.cachedUsers.find(user => user.login.uuid === id) || null),
        catchError(() => of(null))
      );
    } else {
      return of(this.cachedUsers.find(user => user.login.uuid === id) || null);
    }
  }

}
