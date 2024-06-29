// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:5000';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.url+'/api/auth/login', credentials);
  }

  register(credentials: { username: string, password: string, role:string }): Observable<any> {
    return this.http.post(this.url+'/api/auth/register', credentials);
  }

  logout(): Observable<any> {
    localStorage.removeItem(this.tokenKey);
    return this.http.post(this.url+'/api/logout', {});
  }

  uploadpaper(details:any): Observable<any> {
    return this.http.post(this.url+'/api/paper/upload', {});
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
