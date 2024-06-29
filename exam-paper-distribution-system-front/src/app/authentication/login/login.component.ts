// login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
 // Adjust path as needed


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  credentials = { username: '', password: '' };
  public error:any = '';

  constructor(private authService: AuthService, private fb: FormBuilder,  private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      // Perform login logic here
      this.credentials.username = this.loginForm.value.username;
      this.credentials.password = this.loginForm.value.password;
      this.authService.login(this.credentials).subscribe(
        (response:any) => {
          console.log("call", response)
          // Handle successful login (e.g., redirect to dashboard)
          this.router.navigate(['/admin-dashboard']);
        },
        (error:any) => {
          // Handle login error
          this.error = error.message;
        }
      );
    }
      // Example: Call authentication service or navigate to another page
    }
   
}
