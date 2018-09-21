import { trigger, transition, style, animate, keyframes } from "@angular/animations";

export let drop = trigger('drop', [
      transition(':enter', [
        style({
          transform: 'translateX(-800%) rotate(1000deg)',
   
        }),
        animate('5s cubic-bezier(.57,.17,.67,1.31)')
      ])
    ])

export let appearEmailField = trigger('drop', [transition(':enter', [
    style({
        transform: 'translateY(-800px)'
    }), animate(2000)
])])

export let appearPasswordField = trigger('drop', [transition(':enter', [
    style({
        transform: 'translateY(-800px)'
    }), animate(2000)
])])