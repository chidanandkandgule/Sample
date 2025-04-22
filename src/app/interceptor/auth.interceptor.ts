import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  console.log('[Interceptor] Intercepted request:', req.url);
  const authService = inject(AuthService);
  const token = authService.getToken() || null ;

  if (req.url.includes('login')) {
    return next(req); // skip auth for login
  }

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
 