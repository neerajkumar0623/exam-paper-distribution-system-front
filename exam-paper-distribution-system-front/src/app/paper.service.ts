// paper.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http: HttpClient) { }

   // Method to fetch papers
   getPapers(): Observable<any[]> {
    return this.http.get<any[]>('/api/papers');
  }

  // Method to download a paper by ID
  downloadPaper(paperId: string): Observable<any> {
    return this.http.get(`/api/download-paper/${paperId}`, { responseType: 'blob' });
  }

  uploadPaper(formData: FormData): Observable<any> {
    return this.http.post('/api/upload-paper', formData);
  }

  // Implement other paper-related methods (e.g., downloadPaper)
}
