import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {UserModel, UserResponseModel} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.API_HOST;

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
    return this.http.get<UserResponseModel>(`${this.apiUrl}?results=10`, {params: httpParams});
  }


  getUserById(id: string): Observable<UserModel | null> {
    return this.http.get<UserResponseModel>(`${this.apiUrl}?results=1&seed=${id}`).pipe(
      map(response => response.results.length > 0 ? response.results[0] : null),
      catchError(() => of(null))
    );
  }

}
