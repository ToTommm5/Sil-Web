import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class EmailService {
  
  sendMail(name: string, email: string, message: string): void {
    const subject = encodeURIComponent(`SIL-WEB : Message de ${name}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:mail@sil-informatique.com?subject=${subject}&body=${body}`;
  }
}
