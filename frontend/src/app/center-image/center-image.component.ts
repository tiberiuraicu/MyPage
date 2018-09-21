import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'center-image',
  templateUrl: './center-image.component.html',
  styleUrls: ['./center-image.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          marginTop :'0%'
        }),
        animate('1000ms cubic-bezier(.57,.17,.67,1.31)')
      ])
    ]),
   
    
  ]
})
export class CenterImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
