import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  credentials = { username: '', password: '', role:'',};
  public error:any = '';

  constructor(private authService: AuthService, private fb: FormBuilder,  private router: Router) { }
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  signup() {
    if (this.registerForm.valid) {
      // Perform login logic here
      this.credentials.username = this.registerForm.value.username;
      this.credentials.password = this.registerForm.value.password;
      this.credentials.role = this.registerForm.value.role;
      this.authService.register(this.credentials).subscribe(
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
