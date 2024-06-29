import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ExaminerDashboardComponent } from './dashboard/examiner-dashboard/examiner-dashboard.component';
import { InvigilatorDashboardComponent } from './dashboard/invigilator-dashboard/invigilator-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'examiner-dashboard', component: ExaminerDashboardComponent },
  { path: 'invigilator-dashboard', component: InvigilatorDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' }, // Handle invalid routes
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
