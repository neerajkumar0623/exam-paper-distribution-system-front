// paper.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(private http: HttpClient) { }

  uploadPaper(formData: FormData): Observable<any> {
    return this.http.post('/api/upload-paper', formData);
  }

  // Implement other paper-related methods (e.g., downloadPaper)
}
