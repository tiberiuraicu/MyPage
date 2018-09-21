import { trigger, transition, style, animate } from "@angular/animations";

export let fadeNavBarTrigger=trigger('fade-navBar', [
    transition(':enter', [
      style({
        opacity :'0',
      }),
      animate('3000ms cubic-bezier(.57,.17,.67,1.31)')
    ])
  ])

  export let logoTrigger=trigger('logoAnimation', [
    transition(':enter', [
      style({
      transform:'translateY(-100%) rotate(180deg)'

      }),
      animate('1000ms cubic-bezier(.57,.17,.67,1.31)')
    ])
  ])
