import { trigger, transition, style, animate, animation, useAnimation } from "@angular/animations";
export let fadeInAnimation = animation([
    style({
        width: '5px',
        transform: 'translateX(1000px) translateY(-500px)'
    }),
    animate('{{duration}} {{delay}} {{easing}}')
], {
        params: {
            duration: '1s',
            delay: '0s',
            easing: 'cubic-bezier(.57,.17,.67,1.31)'
        }
    })
