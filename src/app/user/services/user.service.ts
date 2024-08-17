import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
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

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserResponseModel>(`${this.apiUrl}?results=10`).pipe(
      tap(response => this.cachedUsers = response.results),
      map(response => response.results),
      catchError(() => of([]))
    );
  }

  filterUsers(name: string, email: string): Observable<UserModel[]> {
    if (!this.cachedUsers.length) {
      return this.getUsers().pipe(
        map(users => this.applyFilter(users, name, email))
      );
    }
    return of(this.applyFilter(this.cachedUsers, name, email));
  }

  private applyFilter(users: UserModel[], name: string, email: string): UserModel[] {
    return users.filter(user =>
      (!name || `${user.name.first} ${user.name.last}`.toLowerCase().includes(name.toLowerCase())) &&
      (!email || user.email.toLowerCase().includes(email.toLowerCase()))
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
