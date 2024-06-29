// upload-paper.component.ts
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

interface Paper {
  title: string;
  uploadDate: Date;
}

@Component({
  selector: 'app-upload-paper',
  templateUrl: './upload-paper.component.html',
  styleUrls: ['./upload-paper.component.css']
})
export class UploadPaperComponent {
  versionControl: { [key: string]: number } = {};

  encryptFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        const encrypted = CryptoJS.AES.encrypt(fileContent, 'your-encryption-key').toString();
        resolve(encrypted);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  async uploadFile(event: any) {
    const file = event.target.files[0];
    const encryptedFile = await this.encryptFile(file);
    const fileName = file.name;
    const version = this.versionControl[fileName] ? this.versionControl[fileName] + 1 : 1;
    this.versionControl[fileName] = version;
    // Simulate uploading the encrypted file and version to the server
    // console.log(Uploading ${fileName} (version ${version}) with content: ${encryptedFile});
  }

  showPopup: boolean = false;

  openPopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

  papers: Paper[] = [
    { title: 'Math Exam Paper', uploadDate: new Date('2024-01-15') },
    { title: 'Science Exam Paper', uploadDate: new Date('2024-02-20') },
    { title: 'History Exam Paper', uploadDate: new Date('2024-03-10') }
  ];

  deletePaper(paper: Paper): void {
    const index = this.papers.indexOf(paper);
    if (index > -1) {
      this.papers.splice(index, 1);
    }
  }

  downloadPaper(paper: any) {
    // Logic to download paper
    console.log('Download paper:', paper);
  }
}