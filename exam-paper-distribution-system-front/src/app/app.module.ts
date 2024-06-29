import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { ExaminerDashboardComponent } from './dashboard/examiner-dashboard/examiner-dashboard.component';
import { InvigilatorDashboardComponent } from './dashboard/invigilator-dashboard/invigilator-dashboard.component';
import { UploadPaperComponent } from './papers/upload-paper/upload-paper.component';
import { ViewPaperComponent } from './papers/view-paper/view-paper.component';
import { AuthService } from './auth.service'; 
import { PaperService } from 'src/app/paper.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    ExaminerDashboardComponent,
    InvigilatorDashboardComponent,
    UploadPaperComponent,
    ViewPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [AuthService, PaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
