import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  constructor(private router: Router) {}


  navigateTo(target: string) {
    this.router.navigate([target]);
  }

}
