import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registerForm!: FormGroup;
  
  constructor(private authService: AuthService, public fb:FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
    
    });
  }


  
  logout() {
    // if (this.registerForm.valid) {
      // Perform login logic here
   
      this.authService.logout();
    // }
      // Example: Call authentication service or navigate to another page
    }
}
