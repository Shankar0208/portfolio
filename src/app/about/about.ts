import {  Component,  ElementRef, 
  NgZone, 
  ViewChild } from '@angular/core';
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
 
  @ViewChild('leftSection') leftSection!: ElementRef;
  @ViewChild('rightSection') rightSection!: ElementRef;

  leftVisible = false;
  rightVisible = false;

  constructor(
    private ngZone: NgZone 
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.observeElement(this.leftSection, () => {
        this.ngZone.run(() => {
          this.leftVisible = true; 
        });
      });

      this.observeElement(this.rightSection, () => {
        this.ngZone.run(() => {
          this.rightVisible = true;
          
        });
      });
    }, 0);
  }

  observeElement(elRef: ElementRef, callback: () => void) {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          callback();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (elRef?.nativeElement) {
      observer.observe(elRef.nativeElement);
    } else {
      console.warn('⚠️ ElementRef not found:', elRef);
    }
  }
}
