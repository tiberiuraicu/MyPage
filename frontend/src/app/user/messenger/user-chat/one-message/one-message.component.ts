import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'one-message',
  templateUrl: './one-message.component.html',
  styleUrls: ['./one-message.component.scss']
})
export class OneMessageComponent implements OnInit {
@Input() emitterName;
@Input() message;
@Input() currentProfilePicture;

  constructor() {}

  ngOnInit() {
   // console.log(this.emitterName+ " "+this.message+this.currentProfilePicture)
  }

}
