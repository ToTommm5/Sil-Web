import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EmailService } from '../../../services/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  ngOnInit(): void {}
  constructor(private emailService: EmailService){}
  
  onSubmit(){
    this.emailService.sendMail(this.name, this.email, this.message);
  }
}
