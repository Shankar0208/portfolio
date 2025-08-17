import {  Component,  ElementRef, 
  NgZone, 
  QueryList, 
  ViewChild, 
  ViewChildren} from '@angular/core';
import { aboutContent } from '../models/constants';  
import { sideTrigger } from '../models/animations';

@Component({
  selector: 'app-about',
  standalone: true,  
  imports: [ ],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations:  [ sideTrigger ]
})
export class About {
  protected aboutContent = aboutContent;
 
  @ViewChildren('colRef') cols!: QueryList<ElementRef>;
  
  leftVisible: boolean[] = [];
  rightVisible: boolean[] = [];
  
  constructor(private ngZone: NgZone) {}
  
  ngOnInit() {
    const len = this.aboutContent.description.length;
    this.leftVisible = new Array(len).fill(false);
    this.rightVisible = new Array(len).fill(false);
  }
  
  ngAfterViewInit() {
    this.cols.forEach((elRef, index) => {
      this.observeElement(elRef, () => {
        this.ngZone.run(() => {
          if (index % 2 === 0) this.leftVisible[index] = true;
          else this.rightVisible[index] = true;
        });
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
