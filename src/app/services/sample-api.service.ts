import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SampleAPIService {
   private authService = inject(AuthService);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample API URL
  private dummyAPI = 'https://dummyjson.com/auth/login'
  private readonly profileUrl = 'https://dummyjson.com/auth/me';
  public loading: boolean = false; 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    this.loading = true;
    return this.http.get(this.apiUrl).pipe(
      finalize(() => (this.loading = false))
    );
  }

  
  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.dummyAPI, {
      username,
      password,
      expiresInMins: 30
    })
  }


  getUser(): Observable<any> {
    return this.http.get(this.profileUrl); // Interceptor will handle the token
  }
  
  logout(): void {
    this.authService.clearToken();
  }
  
}
