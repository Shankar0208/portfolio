import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { floatTrigger, sideTrigger } from '../models/animations';

@Component({
  selector: 'app-technaologies',
  imports: [],
  templateUrl: './technaologies.html',
  styleUrl: './technaologies.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [ floatTrigger, sideTrigger ]
})
export class Technaologies implements OnInit, OnDestroy {
  icons = [
    'logos:html-5',
    'logos:css-3',
    'logos:bootstrap',
    'logos:sass',
    'skill-icons:javascript',
    'skill-icons:typescript',
    'logos:angular-icon',
    'logos:nodejs-icon',
    'skill-icons:expressjs-dark',
    'logos:mongodb-icon',
    'logos:postgresql'
  ];

  floatStates: ('up' | 'down')[] = [];
  private intervalIds: any[] = [];
  @ViewChild('leftSection') leftSection!: ElementRef;
  leftVisible = false; 
  constructor(
    private ngZone: NgZone 
  ) {}

  ngOnInit() {
    // Initialize all states to 'up'
    this.floatStates = this.icons.map(() => 'up');

    // Set up staggered intervals per icon for natural effect
    this.icons.forEach((_, i) => {
      // initial toggle with staggered delay
      const delay = i * 300;
      const intervalId = setTimeout(() => {
        this.toggleFloat(i);
        this.intervalIds[i] = setInterval(() => this.toggleFloat(i), 2500);
      }, delay);
      this.intervalIds.push(intervalId);
    });
  }

  toggleFloat(index: number) {
    this.floatStates[index] = this.floatStates[index] === 'up' ? 'down' : 'up';
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
  ngAfterViewInit() {
    setTimeout(() => {
      this.observeElement(this.leftSection, () => {
        this.ngZone.run(() => {
          this.leftVisible = true; 
        });
      }); 
    }, 0);
  }
  ngOnDestroy() {
    this.intervalIds.forEach(id => clearInterval(id));
  }
  

 

  

 

  
}
