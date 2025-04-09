import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SampleAPIService } from '../services/sample-api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private router: Router ,private sampleAPIService:SampleAPIService){}



  showNavbarButtons(): boolean {
    return this.router.url !== '/' && this.router.url !== '/login';   
  }


  logOut(){
    this.sampleAPIService.logout();
    this.router.navigate(['/login']);
  }
}
