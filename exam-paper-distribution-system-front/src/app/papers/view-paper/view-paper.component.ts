// view-paper.component.ts

import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/paper.service';

interface Paper {
  title: string;
  uploadDate: Date;
}
@Component({
  selector: 'app-view-paper',
  templateUrl: './view-paper.component.html',
  styleUrls: ['./view-paper.component.css']
})
export class ViewPaperComponent implements OnInit {


  constructor(private paperService: PaperService) { }
  ngOnInit(): void {
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
