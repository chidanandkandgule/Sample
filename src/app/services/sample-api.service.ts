import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleAPIService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample API URL
  public loading: boolean = false; 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    this.loading = true;
    return this.http.get(this.apiUrl).pipe(
      finalize(() => (this.loading = false))
    );
  }
}
