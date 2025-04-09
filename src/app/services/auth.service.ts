// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor() {}

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  }
  
  setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }
  
  clearToken(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  // Optional: check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
