// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
 // Adjust path as needed


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials = { username: '', password: '' };

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      (response:any) => {
        // Handle successful login (e.g., redirect to dashboard)
      },
      (error:any) => {
        // Handle login error
      }
    );
  }
}
