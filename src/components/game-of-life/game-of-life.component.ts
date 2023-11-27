import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-of-life',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-of-life.component.html',
  styleUrl: './game-of-life.component.scss'
})
export class GameOfLifeComponent {

  constructor(private router: Router){}

  rowNumber = 0;
  columnNumber = 0;

  navigateTo(target: string) {
    this.router.navigate([target]);
  }

}
