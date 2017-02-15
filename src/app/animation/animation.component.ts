import { Component, OnInit, transition, trigger, state, style, animate } from '@angular/core';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('cognify', [
      state('void', style({
        'background-color':'blue',
      })),
      state('go', style({
        'background-color':'green',
        'heght':'100px'
      })),
      state('stop', style({
        'background-color':'red',
        'border-radius':'10px',
        'height':'50px'
      })),
      transition('void => *', animate('5000ms')),
      transition('* => *', animate('500ms'))
    ])
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  count: number = 0;
  shade: string;
  constructor() { }

  ngOnInit() {
    this.shade = "stop";
  }

  changeShade() {
    this.count++;
    console.log("changing the shade");
    this.shade = 'go';
    if ((this.count % 2) !== 0) {
      this.shade = 'stop';
    }
  }

  onGoClick() {
    this.count++;
    console.log("changing the shade");
    this.shade = 'go';
  }

  onStopClick() {
    this.count++;
    console.log("changing the shade");
    this.shade = 'stop';
  }

}
