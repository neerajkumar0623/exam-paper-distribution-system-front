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
import { RegisterComponent } from './authentication/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'; // Example: Import MatToolbarModule
import { MatIconModule } from '@angular/material/icon'; // Example: Import MatIconModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule for mat-nav-list
import { MatFormFieldModule } from '@angular/material/form-field'; // Example: Import MatFormFieldModule
import { MatMenuModule } from '@angular/material/menu'; 
import {MatTableModule} from '@angular/material/table';
import { UploadPopupComponent } from './upload-popup/upload-popup.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    ExaminerDashboardComponent,
    InvigilatorDashboardComponent,
    UploadPaperComponent,
    ViewPaperComponent,
    RegisterComponent,
    UploadPopupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [AuthService, PaperService],
  bootstrap: [AppComponent, UploadPopupComponent]
})
export class AppModule { }
