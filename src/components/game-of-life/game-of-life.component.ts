import { Component, OnInit } from '@angular/core';
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
export class GameOfLifeComponent implements OnInit{

  constructor(private router: Router){
    
  }

  public rowNumber = 50;
  public columnNumber = 50;
  public cellArray!: number[][];
  public stepNumber = 0;
  public running = false;
  public intervalDelay = 100;
  private stepInterval!: any;
  private cellArrayCopy!: number[][];


  navigateTo(target: string) {
    this.router.navigate([target]);
  }

  updateCellArraySize() {
    // Create a two-dimensional array following column & row number & filled with 0s.
    this.cellArray = new Array(this.rowNumber).fill(0).map(()=> new Array(this.columnNumber).fill(0));
    this.cellArrayCopy = [...this.cellArray];
  }

  switchCell(row: number, column: number) {
    if(this.running) return
    this.cellArray[row][column] = this.cellArray[row][column] === 0 ? 1 : 0;
    this.cellArrayCopy = [...this.cellArray];
    console.log("Cell from row : " + row + " column : " + column + " is now : " + (this.cellArray[row][column] === 0 ? "Dead" : "Alive"))
  }

  randomlyFillBoard() {
    if(this.running) return;
    for (let i = 0; i < this.cellArray.length; i++) {
      for (let j = 0; j < this.cellArray[0].length; j++) {
        this.cellArray[i][j] = Math.random() > 0.5 ? 1 : 0;
      }
    }
  }

  resetBoard() {
    clearInterval(this.stepInterval);
    this.cellArray = [...this.cellArrayCopy];
    this.stepNumber = 0;
  }

  startSimulation() {
    this.running = true;
    this.stepInterval = setInterval(()=>this.calculateNextStep(), this.intervalDelay);
  }

  calculateNextStep() {
    this.stepNumber++;
    const rows = this.cellArray.length;
    const columns = this.cellArray[0].length;
    const newCellArray: number[][] = [];
    for (let i = 0; i < rows; i++) {
      const newRow: number[] = [];
      for (let j = 0; j < columns; j++) {
        // For each cell, we get the number of alive neighbors.
        const neighbors = this.countLiveNeighbors(i, j);
        // Alive cell
        if (this.cellArray[i][j] === 1) {
          // If there is less than 2 alive neighbors, the cell dies because of isolation
          // If there is more than 3, the cell dies because of surpopulation
          if (neighbors < 2 || neighbors > 3) {
            newRow.push(0);
          } else {
            // Else the cell survives... for now
            newRow.push(1);
          }
        } else {
          // Dead cell
          // If there is 3 alive neighbors, the cell is born
          if (neighbors === 3) {
            newRow.push(1);
          } else {
            newRow.push(0);
          }
        }
      }
      newCellArray.push(newRow);
    }
    // Once the next generation is calculated, we copy it into our main cell array.
    this.cellArray = newCellArray;
  }
  
  // Checks each 8 neighbors of the given cell & returns the number of alive cells
  countLiveNeighbors(row: number, column: number): number {
    const rows = this.cellArray.length;
    const columns = this.cellArray[0].length;
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const neighborRow = row + i;
        const neighborColumn = column + j;
        if (
          neighborRow >= 0 && neighborRow < rows &&
          neighborColumn >= 0 && neighborColumn < columns &&
          !(i === 0 && j === 0)
        ) {
          count += this.cellArray[neighborRow][neighborColumn];
        }
      }
    }
    return count;
  }
  
  stopSimulation() {
    this.running = false;
    clearInterval(this.stepInterval);
  }

  ngOnInit(): void {
    this.updateCellArraySize();
  }
}
