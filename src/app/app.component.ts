import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SampageComponent } from './sampage/sampage.component';
import { HeaderComponent } from './header/header.component';
import {SampleAPIService} from './services/sample-api.service'
import { HomeComponent } from './home/home.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule, ChatComponent,SampageComponent,HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  constructor(private route: ActivatedRoute,private location: Location){}

  ngOnInit() {
   
  }

  
  

}
