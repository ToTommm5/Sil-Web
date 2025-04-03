import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-windev',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './windev.component.html',
  styleUrl: './windev.component.css',
})
export class WindevComponent implements OnInit {
  
  name = '';
  email = '';
  message = '';
  
  ngOnInit(): void {}

  constructor(private emailService: EmailService){}
    
    onSubmit(){
      this.emailService.sendMail(this.name, this.email, this.message);
    }
}
