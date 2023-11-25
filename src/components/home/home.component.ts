import { AfterViewInit, Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private el: ElementRef){ }

  @ViewChildren('spanElement') spanElements!: QueryList<ElementRef>;
  private isScrolling = false;
  private showMenu = false;

  onScrollEvent(event: Event) {
    if(!this.isScrolling) {
      this.isScrolling = true;
      this.showMenu = !this.showMenu
      this.spanElements.forEach(element => {
        if(element.nativeElement.classList.contains("swap-text")) {
          element.nativeElement.classList.remove("swap-text");
        } else {
          element.nativeElement.classList.add("swap-text");
        }
      });
      setTimeout(()=>{this.isScrolling = false}, 500);
    }
  }

  navigateTo(target: string) {
    // TODO faire marcher ça
    this.router.navigate([target]);
  }
  
}
