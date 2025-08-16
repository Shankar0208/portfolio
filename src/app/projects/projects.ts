import { Component, ElementRef, NgZone, QueryList, ViewChildren } from '@angular/core';
import { projectType, projects } from '../models/constants';
import { sideTrigger } from '../models/animations';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations:  [ sideTrigger ]
})
export class Projects {
  projectsList: projectType[] = projects;
  @ViewChildren('leftCol') leftCols!: QueryList<ElementRef>;
  @ViewChildren('rightCol') rightCols!: QueryList<ElementRef>;
  
  leftVisible: boolean[] = [];
  rightVisible: boolean[] = [];
  
  constructor(private ngZone: NgZone) {}
  
  ngOnInit() {
    const len = this.projectsList.length;
    this.leftVisible = new Array(len).fill(false);
    this.rightVisible = new Array(len).fill(false);
  }
  
  ngAfterViewInit() {
    // Left column observers
    this.leftCols.forEach((elRef, index) => {
      this.observeElement(elRef, () => {
        this.ngZone.run(() => (this.leftVisible[index] = true));
        console.log(`➡️ leftVisible[${index}] = true`);
      });
    });
  
    // Right column observers
    this.rightCols.forEach((elRef, index) => {
      this.observeElement(elRef, () => {
        this.ngZone.run(() => (this.rightVisible[index] = true));
        console.log(`➡️ rightVisible[${index}] = true`);
      });
    });
  }
  
  observeElement(elRef: ElementRef, callback: () => void) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
  
    if (elRef?.nativeElement) {
      observer.observe(elRef.nativeElement);
    }
  }
}
