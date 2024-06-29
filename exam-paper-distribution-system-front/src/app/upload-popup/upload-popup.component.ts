import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.css']
})
export class UploadPopupComponent {
  paperTitle: string = '';
  selectedFile!: File;

  constructor(private http: HttpClient, private authService: AuthService) {}

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    console.log("select", this.selectedFile)
    const formData = new FormData();
    formData.append('title', this.paperTitle);
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.authService.uploadpaper(formData).subscribe(
      (response) => {
        console.log('Upload success', response);
      },
      (error) => {
        console.error('Upload error', error);
      }
    );
  }
}
