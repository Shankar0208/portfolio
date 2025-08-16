import { animate, animation, keyframes, state, style, transition, trigger } from '@angular/animations';

export function slideIn(direction: 'left' | 'right', delay: number = 0) {
  const translateX = direction === 'left' ? '-100px' : '100px';
  const triggerName = `slideIn${direction.charAt(0).toUpperCase() + direction.slice(1)}${delay}`;

  return trigger(triggerName, [ 
    transition(':enter', [
      style({ opacity: 0, transform: `translateX(${translateX})` }),
      animate(`0.5s ${delay}s ease-out`, style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);
}


// Keep the original functions for backward compatibility
export function slideInLeft(delay: number = 0) {
  return slideIn('left', delay);
}

export function slideInRight(delay: number = 0) {
  return slideIn('right', delay);
}

export function slideInAnimations() {
  return [
    slideIn('left', 0),    // @slideInLeft0
    slideIn('left', 0.5),  // @slideInLeft0.5
    slideIn('left', 1),    // @slideInLeft1
    slideIn('right', 0),   // @slideInRight0
    slideIn('right', 0.5), // @slideInRight0.5
    slideIn('right', 1)    // @slideInRight1
  ];
}


export const sideTrigger =  [
  trigger('slideInLeft', [
    state('hidden', style({ opacity: 0, transform: 'translateX(-100px)' })),
    state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('hidden => visible', animate('1.5s ease-out'))
  ]),
  trigger('slideInRight', [
    state('hidden', style({ opacity: 0, transform: 'translateX(100px)' })),
    state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('hidden => visible', animate('1.5s ease-out'))
  ])
]


export const floatTrigger = trigger('float', [
  state('up', style({ transform: 'translateY(-10px)' })),
  state('down', style({ transform: 'translateY(10px)' })),
  transition('up <=> down', animate('2.5s linear'))
]);