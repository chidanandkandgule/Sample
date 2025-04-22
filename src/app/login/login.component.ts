import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleAPIService } from '../services/sample-api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string;
  password:any;
  constructor( private router: Router , private sampleAPIService:SampleAPIService,private authService:AuthService) {}

  login() {

    this.router.navigate(['/dashboard']);

    // this.sampleAPIService.login('emilys', 'emilyspass').subscribe({
    //   next: (data:any) => {
    //     console.log('Login successful:', data);
    //    // this.authService.setToken(data.accessToken); 
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     console.error('Login failed:', err); 
    //   }
    // });
  }
}