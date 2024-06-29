// upload-paper.component.ts

import { Component } from '@angular/core';
import { PaperService } from 'src/app/paper.service';

@Component({
  selector: 'app-upload-paper',
  templateUrl: './upload-paper.component.html',
  styleUrls: ['./upload-paper.component.scss']
})
export class UploadPaperComponent {

  selectedFile!: File;

  constructor(private paperService: PaperService) { }

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPaper() {
    const formData = new FormData();
    formData.append('paper', this.selectedFile);

    this.paperService.uploadPaper(formData).subscribe(
      (response:any) => {
        // Handle successful upload
      },
      (error:any) => {
        // Handle upload error
      }
    );
  }
}
