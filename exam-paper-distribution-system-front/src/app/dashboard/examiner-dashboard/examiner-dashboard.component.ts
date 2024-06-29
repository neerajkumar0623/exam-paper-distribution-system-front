// examiner-dashboard.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-examiner-dashboard',
  templateUrl: './examiner-dashboard.component.html',
  styleUrls: ['./examiner-dashboard.component.css']
})
export class ExaminerDashboardComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}