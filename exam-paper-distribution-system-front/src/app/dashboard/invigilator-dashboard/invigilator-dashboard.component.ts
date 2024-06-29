// invigilator-dashboard.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-invigilator-dashboard',
  templateUrl: './invigilator-dashboard.component.html',
  styleUrls: ['./invigilator-dashboard.component.css']
})
export class InvigilatorDashboardComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}