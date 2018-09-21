import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "middlepagesection",
  templateUrl: "./middlepagesection.component.html",
  styleUrls: ["./middlepagesection.component.scss"],
  animations: [
    trigger("animatie-bara", [
      transition(":enter", [
        style({
          opacity: "0"
        }),
        animate("2000ms cubic-bezier(.57,.17,.67,1.31)")
      ])
    ])
  ]
})
export class MiddlepagesectionComponent implements OnInit {
  isHoveredButtonDownloadCV: boolean;

  isHoveredButtonWhatIKnow: boolean;

  hoverButtonDownloadCV($event) {
    this.isHoveredButtonDownloadCV = true;
  }

  unhoverButtonDownloadCV() {
    this.isHoveredButtonDownloadCV = false;
  }

  hoveredButtonWhatIKnow() {
    this.isHoveredButtonWhatIKnow = true;
  }

  unhoveredButtonWhatIKnow() {
    this.isHoveredButtonWhatIKnow = false;
  }

  constructor() {}

  ngOnInit() {}
}
